import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'home', loadChildren: () => import('./home/home.routes').then(m => m.routes), data: { text: 'Home' } },
  { path: 'in-app', loadChildren: () => import('./in-app/in-app.routes').then(m => m.routes), data: { text: 'In-App' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
