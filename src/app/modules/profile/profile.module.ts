import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileDetailPage } from './pages/profile-detail/profile-detail.page';
import { ProfileGuard } from './guards/profile.guard';
import { ProfileService } from './services/profile.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import { ProfileEffects } from './effects/profile.effects';
import { ProfilePainelComponent } from './components/profile-painel/profile-painel.component';
import { DonationPopupComponent } from './components/donation-popup/donation-popup.component';

const routes = [
  {
    path: '',
    component: ProfileDetailPage
  },
  {
    path: ':id',
    component: ProfileDetailPage,
    canActivate: [ ProfileGuard ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('profiles', reducers),
    EffectsModule.forFeature([ProfileEffects]),
  ],
  declarations: [
    ProfileDetailPage,
    ProfilePainelComponent,
    DonationPopupComponent,
  ],
  providers: [
    ProfileService,
    ProfileGuard
  ]
})
export class ProfileModule { }
