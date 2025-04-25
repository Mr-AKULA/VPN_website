import { Component, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { github } from '@icon/brand.icon';
import { Devicon } from '@shared/components/devicon/devicon';
import { Logo } from '@shared/components/logo/logo';

import { PaymentService } from '../../services/payment.service';
import { firstValueFrom } from 'rxjs'; // Для работы с Promise


@Component({
  selector: 'use-page',
  standalone: true,
  imports: [Devicon, Logo],
  template: `<div>
  <h1 class="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">AKULA VPN</h1>
  <div class="flex flex-col gap-7">
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <!-- Тариф 1 -->
    <div class="p-6 bg-white dark:bg-gray-800 rounded-xl border border-blue-200 dark:border-blue-800">
      <h3 class="text-xl font-bold dark:text-white mb-4">1 месяц</h3>
      <div class="flex items-baseline mb-6">
        <span class="text-3xl font-bold text-blue-600 dark:text-blue-400">150₽</span>
        <span class="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">229₽</span>
        <span class="ml-2 px-2 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm rounded-full">-34%</span>
      </div>  
      <!-- Для тарифа 1 месяц -->
      <a 
        href="https://payment.akula-vpn.ru/quarterly" 
        target="_blank"
        class="block w-full py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-800 dark:hover:bg-purple-900 text-white text-center rounded-lg transition-all"
      >
        Купить сейчас
      </a>
    </div>
     

    <!-- Тариф 2 -->
    <div class="p-6 bg-white dark:bg-gray-800 rounded-xl border border-purple-200 dark:border-purple-800">
      <h3 class="text-xl font-bold dark:text-white mb-4">3 месяца</h3>
      <div class="flex items-baseline mb-6">
        <span class="text-3xl font-bold text-purple-600 dark:text-purple-400">500₽</span>
        <span class="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">689₽</span>
        <span class="ml-2 px-2 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm rounded-full">-27%</span>
      </div>
      <a 
        href="https://payment.akula-vpn.ru/quarterly" 
        target="_blank"
        class="block w-full py-3 bg-purple-600 hover:bg-purple-700 dark:bg-purple-800 dark:hover:bg-purple-900 text-white text-center rounded-lg transition-all"
      >
        Купить сейчас
      </a>
    </div>

    <!-- Тариф 3 -->
    <div class="p-6 bg-white dark:bg-gray-800 rounded-xl border border-green-200 dark:border-green-800">
      <h3 class="text-xl font-bold dark:text-white mb-4">12 месяцев</h3>
      <div class="flex items-baseline mb-6">
        <span class="text-3xl font-bold text-green-600 dark:text-green-400">1500₽</span>
        <span class="ml-2 text-sm text-gray-500 dark:text-gray-400 line-through">2799₽</span>
        <span class="ml-2 px-2 py-1 bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 text-sm rounded-full">-46%</span>
      </div>
      <a 
        href="https://payment.akula-vpn.ru/annual" 
        target="_blank"
        class="block w-full py-3 bg-green-600 hover:bg-green-700 dark:bg-green-800 dark:hover:bg-green-900 text-white text-center rounded-lg transition-all"
      >
        Купить сейчас
      </a>
    </div>
    </div>

   <!-- О тарифах -->
<div class="space-y-6">
  <h2 class="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
    🚀 О наших тарифах
  </h2>

  <!-- Основные преимущества -->
  <div class="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
        <span class="text-xl">✅</span>
      </div>
      <h3 class="text-lg font-semibold dark:text-white">Всё включено:</h3>
    </div>
    
    <ul class="space-y-3 dark:text-gray-300">
      <li class="flex items-center gap-2">
        <span class="text-blue-500">🌐</span>
        <span class="flex-1">Безлимитный интернет</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">∞</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-green-500">⚡</span>
        <span class="flex-1">Скорость до 1 Гбит/с</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">1Gbps</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-purple-500">🛡️</span>
        <span class="flex-1">Защита соединения</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">AES-256</span>
      </li>
      <li class="flex items-center gap-2">
        <span class="text-yellow-500">⏱️</span>
        <span class="flex-1">Круглосуточная поддержка</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">8/5</span>
      </li>
    </ul>
  </div>

    <!-- Индивидуальные тарифы -->
    <div class="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl border border-dashed border-blue-200 dark:border-blue-800">
      <div class="flex items-center gap-3 mb-3">
        <div class="w-10 h-10 bg-white dark:bg-blue-900 rounded-full flex items-center justify-center">
          <span class="text-xl">💎</span>
        </div>
        <h3 class="text-lg font-semibold dark:text-white">Эксклюзивные решения</h3>
      </div>
      
      <p class="dark:text-gray-300 mb-4">
        Нужен особый подход? Создадим персональный тариф под ваши задачи!
      </p>
      
      <a href="https://t.me/AKULA_VPN_GRUOP" 
        target="_blank"
        class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-800 dark:hover:bg-blue-900 text-white rounded-full transition-all">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.05 5.56-5.022c.24-.213-.054-.297-.373-.103l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.535-.196 1.006.128.832.941z"/>
        </svg>
        Написать в Telegram
      </a>
    </div>
  </div>
  </div>`,
})
export class UsePage {
  metaService = inject(MetaService);
  private paymentService = inject(PaymentService); // Инжектим сервис
  public github = github;

  constructor(){
    this.metaService.setMetaTags(
      `Uses - ${profileData.name}`,
      'Dive into my portfolio, a passionate software engineer based in the Philippines. Explore the intricacies of my journey, from personal details to exciting projects. Join me on this virtual exploration of technology, creativity, and more.',
      [
        'marc kevin flores',
        'marc kevin',
        'marckevinflores',
        'software engineer',
        'philippines',
        'bio',
        'developer',
        'portfolio',
        'development',
        'android',
        'web',
        'ios',
      ]
    );
  }
  // // Добавляем метод для обработки покупки
  // isLoading = false;
  // errorMessage = '';

  // async buyPlan(planId: string) {
  //   this.isLoading = true;
    
  //   try {
  //     // Определяем параметры для каждого тарифа
  //     const plans = {
  //       monthly: { amount: 150, description: 'Подписка на 1 месяц' },
  //       quarterly: { amount: 500, description: 'Подписка на 3 месяца' },
  //       annual: { amount: 1500, description: 'Подписка на 12 месяцев' }
  //     };

  //     const plan = plans[planId];  // Теперь TypeScript знает точные типы
  //     const response = await firstValueFrom(
  //       this.paymentService.createYooKassaPayment(
  //         planId, 
  //         plan.amount, 
  //         plan.description
  //       )
  //     );

  //     window.location.href = response.confirmation_url;
      
  //   } catch (error) {
  //     console.error('Payment error:', error);
  //     this.errorMessage = 'Ошибка при создании платежа';
  //   } finally {
  //     this.isLoading = false;
  //   }
  // }
}
