import { Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { EmptyRouteComponent } from './EmptyRoute/EmptyRoute.component';

export const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: '**', component: EmptyRouteComponent },
];
