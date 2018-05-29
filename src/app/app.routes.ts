import { NgModule } from '@angular/core';
import { Routes, CanActivate } from '@angular/router';
import { RootComponent } from './modules/core/components/root/root.component';
import { PageNotFoundComponent } from './modules/core/components/page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'profiles',
    pathMatch: 'full'
  },
  {
    path: 'profiles',
    loadChildren: './modules/profile/profile.module#ProfileModule'
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];