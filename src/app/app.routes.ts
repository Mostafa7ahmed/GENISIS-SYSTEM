import { Routes } from '@angular/router';
import { authGuard } from './Core/guards/auth.guard';
import { isAuthGuard } from './Core/guards/is-auth.guard';
import { MainOutlet } from './Layout/main-outlet/main-outlet';
import { Home } from './Pages/home/home';

export const routes: Routes = [
  {
    path: '',
    component: MainOutlet,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        component: Home,
      },
      {
        path: 'client',
        loadComponent: () =>
          import('./Pages/client/client').then(m => m.Client),
      },
      {
        path: 'client/:id',
        loadComponent: () =>
          import('./Pages/client-profile/client-profile').then(m => m.ClientProfile),
      },
      
    ]
  }
];
