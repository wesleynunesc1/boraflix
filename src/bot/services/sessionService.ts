const SESSION_STORAGE_KEY = 'boraflix_bot_session_v1';

export interface SavedBotSession {
  step: string;
  orderId: string;
  planId?: string;
  planName?: string;
  planPrice?: string;
  planPeriod?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  // CPF is kept only in memory or session storage for the immediate checkout session
  customerCpf?: string;
  customerConsent?: boolean;
  deviceCategory?: string;
  deviceCategoryLabel?: string;
  deviceDetail?: string;
  deviceDetailLabel?: string;
  appInstalled?: boolean | null;
  paymentStatus?: string;
}

export function saveBotSession(data: Partial<SavedBotSession>): void {
  try {
    const existing = loadBotSession() || {};
    const merged = { ...existing, ...data };
    sessionStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(merged));
  } catch (err) {
    console.warn('Unable to persist bot session to sessionStorage:', err);
  }
}

export function loadBotSession(): SavedBotSession | null {
  try {
    const raw = sessionStorage.getItem(SESSION_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (err) {
    console.warn('Unable to read bot session from sessionStorage:', err);
    return null;
  }
}

export function clearBotSession(): void {
  try {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  } catch (err) {
    console.warn('Unable to clear bot session from sessionStorage:', err);
  }
}
