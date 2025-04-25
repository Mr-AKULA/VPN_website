// src/app/services/payment.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://your-backend-api.com/payments'; // Замените на ваш URL

  createPayment(planId: string) {
    return this.http.post<{ confirmation_url: string }>(`${this.API_URL}/create`, {
      planId,
      // Дополнительные параметры, если нужны
      currency: 'RUB',
      description: `Покупка тарифа ${planId}`
    });
  }
}