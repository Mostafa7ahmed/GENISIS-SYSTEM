import { Routes } from '@angular/router';
import { authGuard } from './Core/guards/auth.guard';
import { isAuthGuard } from './Core/guards/is-auth.guard';
import { MainOutlet } from './Layout/main-outlet/main-outlet';
import { Home } from './Pages/home/home';
import { MainlayoutNonNav } from './Layout/mainlayout-non-nav/mainlayout-non-nav';

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
        path: 'clients',
        loadComponent: () =>
          import('./Pages/client/client').then(m => m.Client),
      },
      {
        path: 'client/:id',
        loadComponent: () =>
          import('./Pages/client-profile/client-profile').then(m => m.ClientProfile),
      },


    ]
  },
  {
    path: '',
    component: MainlayoutNonNav,
    children: [
      {
        path: 'profile/:id',
        loadComponent: () =>
          import('./Pages/client-profile/client-profile').then(m => m.ClientProfile),
      },

    
    ]
  },

];
