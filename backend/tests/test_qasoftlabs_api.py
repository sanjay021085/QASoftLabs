"""Backend API tests for QASoftLabs."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://verify-enterprise-1.preview.emergentagent.com").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
class TestHealth:
    def test_root(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "QASoftLabs" in data["message"]
        assert data["service"] == "qasoftlabs"
        assert data["status"] == "ok"


# ---------- Contact ----------
class TestContact:
    def test_create_valid_and_persist(self, client):
        payload = {
            "name": "TEST_Contact User",
            "email": "test_contact@example.com",
            "company": "TEST_Corp",
            "message": "This is a test contact submission body.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["company"] == payload["company"]
        assert data["message"] == payload["message"]
        assert isinstance(data["id"], str) and len(data["id"]) > 0

        # GET should include the new submission
        rg = client.get(f"{API}/contact")
        assert rg.status_code == 200
        items = rg.json()
        assert isinstance(items, list)
        assert any(it["id"] == data["id"] for it in items)

    def test_create_without_company(self, client):
        payload = {
            "name": "TEST_NoCompany",
            "email": "nocompany@example.com",
            "message": "Hello world test message.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 200
        d = r.json()
        assert d["company"] is None

    def test_invalid_email(self, client):
        payload = {
            "name": "Bad Email",
            "email": "not-an-email",
            "message": "Some valid length message here.",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_short_message(self, client):
        payload = {
            "name": "Short Msg",
            "email": "valid@example.com",
            "message": "hi",
        }
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422

    def test_missing_name(self, client):
        payload = {"email": "valid@example.com", "message": "valid message body"}
        r = client.post(f"{API}/contact", json=payload)
        assert r.status_code == 422


# ---------- Consultation ----------
class TestConsultation:
    def test_create_valid_and_persist(self, client):
        payload = {
            "name": "TEST_Consult User",
            "email": "test_consult@example.com",
            "company": "TEST_Corp",
            "phone": "+1-555-1234",
            "preferred_date": "2026-02-15",
            "project_brief": "We need help with QA automation across multiple platforms.",
        }
        r = client.post(f"{API}/consultation", json=payload)
        assert r.status_code == 200, r.text
        d = r.json()
        assert d["name"] == payload["name"]
        assert d["email"] == payload["email"]
        assert d["project_brief"] == payload["project_brief"]
        assert d["status"] == "new"
        assert isinstance(d["id"], str)

        rg = client.get(f"{API}/consultation")
        assert rg.status_code == 200
        items = rg.json()
        assert any(it["id"] == d["id"] for it in items)

    def test_invalid_email(self, client):
        payload = {
            "name": "Bad",
            "email": "broken",
            "project_brief": "Valid project brief content.",
        }
        r = client.post(f"{API}/consultation", json=payload)
        assert r.status_code == 422

    def test_short_brief(self, client):
        payload = {
            "name": "Bad",
            "email": "ok@example.com",
            "project_brief": "x",
        }
        r = client.post(f"{API}/consultation", json=payload)
        assert r.status_code == 422

    def test_missing_required(self, client):
        r = client.post(f"{API}/consultation", json={"email": "ok@example.com"})
        assert r.status_code == 422
