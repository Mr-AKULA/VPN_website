// src/app/services/payment.service.ts
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private http = inject(HttpClient);
  private readonly API_URL = 'https://your-backend.com/api/payments'; // Ваш бэкенд

  createYooKassaPayment(planId: string, amount: number, description: string) {
    return this.http.post<{ confirmation_url: string }>(`${this.API_URL}/yookassa`, {
      planId,
      amount,
      description,
      currency: 'RUB'
    });
  }
}