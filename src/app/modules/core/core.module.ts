import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { RootComponent } from './components/root/root.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const COMPONENTS = [
  RootComponent,
  PageNotFoundComponent,
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    COMPONENTS
  ]
})
export class CoreModule {
  static forRoot() {
    return {
      ngModule: CoreModule,
      providers: [ ]
    };
  }
}
