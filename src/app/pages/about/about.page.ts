import { NgFor } from '@angular/common';
import { Component, ViewEncapsulation, effect, inject } from '@angular/core';
import { MetaService } from '@core/services/meta.service';
import { TraktTvService } from '@core/services/trakt-tv.service';
import profileData from '@data/profile.data';
import { Music } from '@shared/components/music/music'
import { Watch } from '@shared/components/watch/watch'
@Component({
  selector: 'about',
  template: `
  <section class="flex flex-col max-w-screen-lg justify-between mx-auto gap-16 dark:text-gray-200 overflow-y-hidden">
    <!-- О компании -->
    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">О AKULA VPN</h1>
      <p class="justify-start">
        Мы — молодая, но стремительно развивающаяся команда экспертов в области кибербезопасности. 
        За 6 месяцев работы мы обеспечили защиту более 4 пользователей, 
        и ни один из наших клиентов не остался недоволен! 🔥
      </p>
      <p *ngFor="let a of aboutDetails">
        <b class="dark:text-white text-black">{{a.title}}</b><br />
        {{a.desc}}
      </p>
    </div>

    <!-- Наши преимущества -->
    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">Наши козыри:</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div class="bg-white/5 p-4 rounded-xl">
          <h3 class="font-bold mb-2">🛡️ 100% гарантия</h3>
          <p>Возврат средств в течение 7 дней </p>
        </div>
        <div class="bg-white/5 p-4 rounded-xl">
          <h3 class="font-bold mb-2">🌐 40+ пинг</h3>
          <p>Серверы с минимальной задержкой в ключевых регионах мира</p>
        </div>
      </div>
    </div>

    <!-- Контакты -->
    <div class="flex flex-col gap-5">
      <h1 class="text-2xl font-semibold dark:text-white">Всегда на связи:</h1>
      @for(c of contactInfo; track $index){
        <p>
          <b class="dark:text-white text-black">{{c.title}}:</b><br />
          <a [href]="c.link" class="hover:underline" target="_blank">{{c.desc}}</a>
        </p>
      }
      <p class="mt-4 text-sm opacity-75">
        Среднее время ответа: 8 минут ⏱️<br>
        Решаем 97% проблем с первого обращения 💪
      </p>
    </div>
  </section>
`,
  encapsulation: ViewEncapsulation.None,
  imports: [NgFor, Music, Watch],
  standalone: true
})
export class AboutPage{
  metaService = inject(MetaService)
  traktTvService = inject(TraktTvService)
  constructor(){
    this.metaService.setMetaTags(
      `About - ${profileData.name}`,
      'Dive into a curated space to learn more about the person behind the name',
      ['bio', 'biography', 'information', 'about', 'contact', 'detail']
      )
  }
  public aboutDetails = [
    {
      title: 'Как это работает',
      desc: `VPN становится вашим цифровым компаньоном в повседневной жизни:\n\n` +
        `• Для работы — защита корпоративных данных в публичных сетях Wi-Fi\n` +
        `• Для геймеров — стабильный пинг и защита от DDoS-атак\n` +
        `• Для путешественников — доступ к любимым сервисам из любой точки мира\n` +
        `• Для ценителей контента — безопасное скачивание и стриминг в HD-качестве`
    },
    {
      title: 'Развитие технологий',
      desc: `Мы постоянно совершенствуем инфраструктуру:\n\n` +
        `• Добавляем новые протоколы для ускорения соединения\n` +
        `• Тестируем AI-алгоритмы для оптимизации маршрутов\n` +
        `• Внедряем эко-технологии для серверов\n` +
        `• Ежеквартально обновляем систему шифрования`
    },
    {
      title: 'Ваш цифровой комфорт',
      desc: `С AKULA VPN вы сможете:\n\n` +
        `• Смотреть спортивные трансляции без региональных ограничений\n` +
        `• Играть в онлайн-игры с друзьями из других стран\n` +
        `• Работать удалённо через защищённые каналы\n` +
        `• В путешествиях оставаться на связи и иметь доступ к домашнему контенту`
    },
    {
      title: 'Наша философия',
      desc: `Мы создаём технологии, чтобы вы могли:\n\n` +
        `• Сохранить приватность в эпоху цифровой слежки\n` +
        `• Защитить личные данные от киберугроз\n` +
        `• Оставаться на связи в любой точке планеты\n` +
        `• Выбирать цифровое пространство`
    }
  ];
  public contactInfo = [
    {
      title: 'ТГ Группа',
      desc: `AKULA VPN GROUP`,
      link: 'https://t.me/AKULA_VPN_GRUOP'
    }
    // {
    //   title: 'Mobile Number',
    //   desc: '+639092884082',
    //   link: 'tel:+639092884082'
    // },
    // {
    //   title: 'Email',
    //   desc: 'marc@kevinflor.es',
    //   link: 'mailto:marc@kevinflor.es'
    // }
  ]
}
