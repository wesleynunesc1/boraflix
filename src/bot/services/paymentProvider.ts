import { PaymentStatus } from '../types/bot';

export interface PaymentIntentRequest {
  orderId: string;
  amount: string;
  currency: string;
  customerName: string;
  customerEmail: string;
  customerCpf: string;
}

export interface PaymentIntentResponse {
  status: PaymentStatus;
  paymentId: string;
  pixQrCode: string;
  pixCopiaECola: string;
  expiresInSeconds: number;
}

export interface IPaymentProvider {
  name: string;
  isMock: boolean;
  createPaymentIntent(req: PaymentIntentRequest): Promise<PaymentIntentResponse>;
  checkPaymentStatus(paymentId: string): Promise<PaymentStatus>;
}

/**
 * Mock Payment Provider for prototyping and user testing.
 * In a production release, this would be replaced with an integration to a secure backend API.
 */
export class MockPaymentProvider implements IPaymentProvider {
  name = 'BoraFlix Mock Gateway (Ambiente de Teste)';
  isMock = true;

  async createPaymentIntent(req: PaymentIntentRequest): Promise<PaymentIntentResponse> {
    // Simulate slight asynchronous network latency
    await new Promise(resolve => setTimeout(resolve, 600));

    return {
      status: 'pending',
      paymentId: `PAY-MOCK-${req.orderId}`,
      pixQrCode: 'https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=BORAFLIX-MOCK-PIX-' + req.orderId,
      pixCopiaECola: `00020126580014br.gov.bcb.pix0136boraflix-mock-${req.orderId.toLowerCase()}5204000053039865802BR5916BORAFLIX TESTE6009FORTALEZA62070503***6304MOCK`,
      expiresInSeconds: 900,
    };
  }

  async checkPaymentStatus(paymentId: string): Promise<PaymentStatus> {
    await new Promise(resolve => setTimeout(resolve, 300));
    // In mock mode, defaults to pending unless simulated by user controls
    return 'pending';
  }
}

export const activePaymentProvider: IPaymentProvider = new MockPaymentProvider();
