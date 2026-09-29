export type BotStep =
  | 'WELCOME'
  | 'PLAN_SELECTION'
  | 'ASK_NAME'
  | 'DEVICE_SELECTION'
  | 'DEVICE_DETAILS'
  | 'APP_INSTRUCTIONS'
  | 'PERSONAL_DATA'
  | 'REVIEW'
  | 'PAYMENT'
  | 'PAYMENT_CONFIRMED'
  | 'WHATSAPP_HANDOFF';

export type PaymentStatus =
  | 'idle'
  | 'creating'
  | 'pending'
  | 'paid'
  | 'expired'
  | 'failed';

export interface DeviceInfo {
  category: string;
  categoryLabel: string;
  detail: string;
  detailLabel: string;
  installed: boolean | null;
}

export interface CustomerData {
  name: string;
  email: string;
  phone: string;
  cpf: string;
  consent: boolean;
}

export interface BotOrder {
  orderId: string;
  planId: string;
  planName: string;
  planPrice: string;
  planPeriod: string;
  device: DeviceInfo;
  customer: CustomerData;
  paymentStatus: PaymentStatus;
  createdAt: string;
}

export interface ChatMessageItem {
  id: string;
  sender: 'bot' | 'user';
  text: string;
  timestamp: string;
}
