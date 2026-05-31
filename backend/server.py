from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

try:
    import resend  # type: ignore
except ImportError:  # pragma: no cover
    resend = None


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email config (optional — emails only sent when RESEND_API_KEY is set)
RESEND_API_KEY = os.environ.get('RESEND_API_KEY', '').strip()
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', 'onboarding@resend.dev')
NOTIFICATION_EMAIL = os.environ.get('NOTIFICATION_EMAIL', '').strip()
if RESEND_API_KEY and resend is not None:
    resend.api_key = RESEND_API_KEY

# Configure logging (early — used by helpers below)
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


async def send_notification_email(subject: str, html: str) -> None:
    """Send a notification email — silently no-ops if Resend isn't configured."""
    if not (RESEND_API_KEY and NOTIFICATION_EMAIL and resend is not None):
        return
    try:
        params = {
            "from": SENDER_EMAIL,
            "to": [NOTIFICATION_EMAIL],
            "subject": subject,
            "html": html,
        }
        await asyncio.to_thread(resend.Emails.send, params)
    except Exception:
        logger.exception("Failed to send notification email")


# Create the main app without a prefix
app = FastAPI(title="QASoftLabs API")

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# ============ Models ============
class ContactSubmissionCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=120)
    message: str = Field(..., min_length=5, max_length=4000)


class ContactSubmission(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class ConsultationCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    company: Optional[str] = Field(None, max_length=120)
    phone: Optional[str] = Field(None, max_length=40)
    preferred_date: Optional[str] = Field(None, max_length=40)
    project_brief: str = Field(..., min_length=5, max_length=4000)


class Consultation(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    company: Optional[str] = None
    phone: Optional[str] = None
    preferred_date: Optional[str] = None
    project_brief: str
    status: str = "new"
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


# ============ Routes ============
@api_router.get("/")
async def root():
    return {"message": "QASoftLabs API is running", "service": "qasoftlabs", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "timestamp": datetime.now(timezone.utc).isoformat()}


@api_router.post("/contact", response_model=ContactSubmission)
async def create_contact_submission(payload: ContactSubmissionCreate):
    try:
        obj = ContactSubmission(**payload.model_dump())
        doc = obj.model_dump()
        doc["created_at"] = doc["created_at"].isoformat()
        await db.contact_submissions.insert_one(doc)

        # Fire-and-forget notification email (non-blocking)
        html = f"""
        <div style="font-family: Arial, sans-serif; color: #022C22;">
          <h2 style="color:#059669;">New Contact Form Submission</h2>
          <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
            <tr><td><strong>Name</strong></td><td>{obj.name}</td></tr>
            <tr><td><strong>Email</strong></td><td>{obj.email}</td></tr>
            <tr><td><strong>Company</strong></td><td>{obj.company or '-'}</td></tr>
            <tr><td valign="top"><strong>Message</strong></td><td>{obj.message}</td></tr>
            <tr><td><strong>Submitted at</strong></td><td>{doc['created_at']}</td></tr>
          </table>
          <p style="margin-top:24px; font-size:12px; color:#64748B;">— QASoftLabs notification system</p>
        </div>
        """
        asyncio.create_task(send_notification_email(
            subject=f"[QASoftLabs] New contact from {obj.name}",
            html=html,
        ))
        return obj
    except Exception:
        logger.exception("Failed to create contact submission")
        raise HTTPException(status_code=500, detail="Could not save submission")


@api_router.get("/contact", response_model=List[ContactSubmission])
async def list_contact_submissions():
    items = await db.contact_submissions.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get("created_at"), str):
            it["created_at"] = datetime.fromisoformat(it["created_at"])
    return items


@api_router.post("/consultation", response_model=Consultation)
async def create_consultation(payload: ConsultationCreate):
    try:
        obj = Consultation(**payload.model_dump())
        doc = obj.model_dump()
        doc["created_at"] = doc["created_at"].isoformat()
        await db.consultations.insert_one(doc)

        html = f"""
        <div style="font-family: Arial, sans-serif; color: #022C22;">
          <h2 style="color:#059669;">New Consultation Request</h2>
          <table cellpadding="6" cellspacing="0" style="border-collapse: collapse;">
            <tr><td><strong>Name</strong></td><td>{obj.name}</td></tr>
            <tr><td><strong>Email</strong></td><td>{obj.email}</td></tr>
            <tr><td><strong>Company</strong></td><td>{obj.company or '-'}</td></tr>
            <tr><td><strong>Phone</strong></td><td>{obj.phone or '-'}</td></tr>
            <tr><td><strong>Preferred date</strong></td><td>{obj.preferred_date or '-'}</td></tr>
            <tr><td valign="top"><strong>Project brief</strong></td><td>{obj.project_brief}</td></tr>
            <tr><td><strong>Submitted at</strong></td><td>{doc['created_at']}</td></tr>
          </table>
          <p style="margin-top:24px; font-size:12px; color:#64748B;">— QASoftLabs notification system</p>
        </div>
        """
        asyncio.create_task(send_notification_email(
            subject=f"[QASoftLabs] New consultation request from {obj.name}",
            html=html,
        ))
        return obj
    except Exception:
        logger.exception("Failed to create consultation request")
        raise HTTPException(status_code=500, detail="Could not save consultation")


@api_router.get("/consultation", response_model=List[Consultation])
async def list_consultations():
    items = await db.consultations.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)
    for it in items:
        if isinstance(it.get("created_at"), str):
            it["created_at"] = datetime.fromisoformat(it["created_at"])
    return items


# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
