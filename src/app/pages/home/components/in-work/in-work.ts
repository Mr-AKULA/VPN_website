import { Component, computed, inject } from '@angular/core';
import { Devicon } from '@shared/components/devicon/devicon';
import { LanguageToolService } from '@pages/home/components/language-tools/language-tool.service';
import inWorkData from '@data/in-work.data'
@Component({
  selector: 'in-work',
  standalone: true,
  imports: [Devicon],
  template: `
  <section class="mt-10 max-w-4xl mx-auto px-4">
  <h1 class="text-2xl dark:text-white font-bold mb-8">AKULA VPN — ваш надёжный щит в цифровом мире</h1>

  <div class="space-y-8">
    <!-- Блок защиты -->
    <div class="bg-white/10 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 class="text-xl font-semibold dark:text-white mb-4 flex items-center gap-2">
        <span>🔒</span> Защитите свою цифровую идентичность
      </h2>
      <ul class="space-y-3 dark:text-gray-300">
        <li class="flex items-start gap-2">
          <span>✓</span> Сокрытие реального IP-адреса — ваше местоположение останется тайной даже для провайдеров и хакеров
        </li>
        <li class="flex items-start gap-2">
          <span>✓</span> Военное шифрование — ни один посторонний не сможет перехватить ваши данные
        </li>
        <li class="flex items-start gap-2">
          <span>✓</span> Автоматическая блокировка утечек — никаких случайных раскрытий DNS или IPv4
        </li>
      </ul>
    </div>

    <!-- Преимущества -->
    <div class="bg-white/10 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 class="text-xl font-semibold dark:text-white mb-4 flex items-center gap-2">
        <span>🚀</span> Преимущества для вас
      </h2>
      <div class="grid md:grid-cols-2 gap-4 dark:text-gray-300">
        <div class="flex items-start gap-2">✓ Скорость как у молнии — 4K-стриминг, игры и звонки без лагов</div>
        <div class="flex items-start gap-2">✓ 100% защита от кибератак</div>
        <div class="flex items-start gap-2">✓ Никаких следов — история браузера остаётся только у вас</div>
        <div class="flex items-start gap-2">✓ Персональная поддержка — решаем проблемы за 15 минут в любом мессенджере, но чаще всего ТГ</div>
      </div>
    </div>

    <!-- Важность IP -->
    <div class="bg-white/10 dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 class="text-xl font-semibold dark:text-white mb-4 flex items-center gap-2">
        <span>🌍</span> Почему скрывать IP — необходимость?
      </h2>
      <ul class="list-disc pl-6 space-y-3 dark:text-gray-300">
        <li>Защита от слежки — рекламные сети и корпорации не соберут ваши данные</li>
        <li>Цензура это не для нас - путешествия, работа и обучение без ограничений</li>
        <li>Кибербезопасность — злоумышленники не найдут лазейку для атак мы берём нагрузку на себя</li>
      </ul>
    </div>

    <!-- CTA -->
    <div class="text-center py-6">
      <h3 class="text-xl font-bold dark:text-white mb-4">💥 Выберите тариф и активируйте неуязвимость!</h3>
      <p class="dark:text-gray-300 text-lg">🔥 Первые 7 дней — бесплатно, затем от <s>270</s> 150₽/мес</p>
    </div>

    <!-- Иконки -->
    <div class="flex flex-wrap justify-center gap-6 py-8">
      @for (t of workTools(); track t.name) {
        <a [href]="t.url" [attr.aria-label]="t.name" target="_blank" class="hover:scale-110 transition-transform">
          <devicon [name]="t.name" [key]="$index" cssClass="w-12 h-12"/>
        </a>
      }
    </div>
  </div>
</section>
`
})
export class InWork{
  languageToolService = inject(LanguageToolService);
  workTools = computed(() => this.languageToolService.languageTools().filter(lt => inWorkData.includes(lt.name)))
}
