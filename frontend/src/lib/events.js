// Lightweight global event bus for cross-component dialog triggers (no extra deps).
export const openConsultation = () => {
  window.dispatchEvent(new CustomEvent("qasl:open-consultation"));
};
