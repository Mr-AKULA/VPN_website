import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import { provideClientHydration } from '@angular/platform-browser';

// app.config.server.ts
const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideClientHydration(),
    { provide: PaymentService, useValue: null } // ⚠️ Отключаем сервис для SSR
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
