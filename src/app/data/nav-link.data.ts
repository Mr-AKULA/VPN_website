import { NavLinkSchema } from '@data/schema/nav-link.schema'
const navlinkData: NavLinkSchema[] = [
  {
    name: 'Главная',
    path: '/',
  },
  {
    name: 'О нас',
    path: '/about',
  },
  {
    name: 'Личный кабинет',
    path: '/project',
  },
  {
    name: 'Что нового',
    path: '/blog',
  },
  {
    name: 'Тарифы',
    path: '/uses',
  },
];

export default navlinkData
