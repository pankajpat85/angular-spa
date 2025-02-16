import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './EmptyRoute/EmptyRoute.component';

export const routes: Routes = [{ path: '**', component: EmptyRouteComponent }];
