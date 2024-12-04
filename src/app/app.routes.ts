import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'boxes',
        loadChildren: () =>
            import('../app/pages/boxes/boxes.routes').then((m) => m.BOXES_ROUTES),
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'boxes',
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'boxes',
      },
];
