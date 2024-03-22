import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.component'),
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./portfolio/portfolio.component'),
  },
  {
    path: 'contact-me',
    loadComponent: () => import('./contact/contact.component'),
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
