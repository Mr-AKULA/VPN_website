import { ChangeDetectionStrategy, Component, ViewEncapsulation, inject } from '@angular/core';
import { BlogService } from '@pages/blog/blog.service'
import { RouterLink } from '@angular/router';
import { MetaService } from '@core/services/meta.service';
import profileData from '@data/profile.data';
import { ImageSkeletonDirective } from '@core/directives/image-skeleton.directive';
import { Loader } from '@shared/components/loader/loader';
@Component({
  selector: 'blog-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [RouterLink, ImageSkeletonDirective, Loader],
  template: `
  <div class="container px-8 mx-auto xl:px-5">
  <div class="mx-auto max-w-screen-md">
    <h1
      class="text-brand-primary mb-3 mt-2 text-center text-3xl font-semibold tracking-tight lg:text-4xl lg:leading-snug dark:text-white">
      ОБНОВЛЕННО/ДОБАВЛЕННО
    </h1>
    </div>
</div>


<!-- Первый блок -->
<div class="pl-6 border-l-4 border-blue-200 dark:border-blue-800 mb-8">

  <!-- Добавлены классы для темной/светлой темы -->
  <p class="mb-2 text-black dark:text-white">✔️ Полностью переехали с Telegram-бота на полноценный сайт</p>
  <p class="mb-2 text-black dark:text-white">✔️ Удобный личный кабинет с историей подключений</p>
  <p class="mb-2 text-black dark:text-white">✔️ Улучшенная система технической поддержки</p>
  
  <!-- Блок с датой -->
  <div class="mt-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg">
    <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
      🗓️ 24.04.2024: Стартовая версия сайта
    </p>
    <p class="text-sm mt-1 text-gray-600 dark:text-gray-400">
      Переход с Telegram завершён, активная разработка новых функций
    </p>
  </div>

  <!-- Список работ -->
  <p class="mt-4 mb-2 text-black dark:text-white font-semibold">🔧 Активно работаем над:</p>
  <ul class="list-disc pl-6 mt-2 space-y-2 text-black dark:text-white">
    <li>Мобильным приложением для iOS/Android</li>
    <li>Расширением для браузеров</li>
    <li>Системой реферальных бонусов</li>
    <li class="text-gray-600 dark:text-gray-400">Оптимизацией скорости подключения</li>
  </ul>

</div>

<!-- Второй блок -->
<div class="pl-6 border-l-4 border-blue-200 dark:border-blue-800">

</div>


  @defer(on immediate) {
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-lg mx-auto my-10 text-left ">
      @for (post of blogService.blogs(); track post.id) {
      <a class="max-w-sm mx-auto bg-white dark:bg-gray-900 rounded-lg" [routerLink]="['/blog/'+ post.slug+'']">
        <img skeleton class="rounded-lg object-cover hover:scale-105 transition-all w-full h-52" [src]="post.smallImage"
          [alt]="post.title"/>
        <div class="pt-3">
          <h5 class="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">{{post.title}}</h5>
          <p class="mb-2 text-sm text-gray-900 dark:text-gray-200">{{post.summary}}</p>
        </div>
      </a>
      }
    </div>
  }@placeholder {
    <loader/>
  }
`
})
export class BlogPage {
  blogService = inject(BlogService);
  metaService = inject(MetaService)
  constructor(){
    this.metaService.setMetaTags(
      `Blogs - ${profileData.name}`,
      `Blog posts by ${profileData.name}. I share some guide, tutorials and information about software development`,
      'tech,software,development,thoughts,blog,content,news,tutorials,guide,post'
      )
  }
}
