import { ExpertiseAreaSchema } from "@data/schema/expertise-area.schema";
import { site, api, mobile, monitor, speed, search } from '@icon/regular.icon'


const expertiseAreaData: ExpertiseAreaSchema[] = [
  {
    icon: site,
    percent: '5',
    name: 'Постоянных пользователей'
  },
  {
    icon: api,
    percent: '2',
    name: 'Сервера с поддержкой 8ч/сутки'
  },
  {
    icon: mobile,
    percent: 'на 50%',
    name: 'Дешевле чем у конкурентов'
  },
  {
    icon: monitor,
    percent: 'Хорошее железо',
    name: 'Низкая нагрузка на сеть'
  },
  {
    icon: speed,
    percent: 'Полнная отдача',
    name: 'Максимальная скорость 1Гб/c'
  },
  {
    icon: search,
    percent: 'Идеально подходит для любых задач',
    name: 'Можно: играть , смотреть фильмы и сериалы, скачивать файлы'
  },
]

export default expertiseAreaData
