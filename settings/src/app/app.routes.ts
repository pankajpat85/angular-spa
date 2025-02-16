import { Routes } from '@angular/router';
import { SettingsComponent } from './settings/settings.component';
import { EmptyRouteComponent } from './EmptyRoute/EmptyRoute.component';

export const routes: Routes = [
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: EmptyRouteComponent },
];
