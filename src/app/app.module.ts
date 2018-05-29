import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';

import { RootComponent } from './modules/core/components/root/root.component';
import { CoreModule } from './modules/core/core.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true}),

    // Apollo GraphQL modules
    ApolloModule,
    HttpLinkModule,

    // NgRx modules
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([]),

    // Eagerly loaded feature modules
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [ RootComponent ]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      link: httpLink.create({ uri: 'https://refugeechallenge.collaborizm.com/graphql'}),
      cache: new InMemoryCache()
    })
  }
}
