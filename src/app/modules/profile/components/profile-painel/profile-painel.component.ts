import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromProfile from '../../reducers';
import { ReceiveDonation } from '../../actions/profile/profile.actions';

@Component({
  selector: 'profile-painel',
  templateUrl: './profile-painel.component.html',
  styleUrls: ['./profile-painel.component.scss']
})
export class ProfilePainelComponent {

  refugee: any;
  showPopup: boolean;
  defaultText: string = '—';

  @Input() set profile (value) {
    this.refugee = value;
    document.body.style.setProperty('--profileColor', this.getProfileColor());
  }
  @Output() funded: EventEmitter<number> = new EventEmitter();

  constructor(
    private store: Store<fromProfile.State>
  ) { }
  
  getId(): string {
    return this.refugee.id.trim();
  }

  getFirstName(): string {
    return this.refugee ? this.refugee.first_name : this.defaultText;
  }

  getLastName(): string {
    return this.refugee ? this.refugee.last_name : this.defaultText;
  }

  getImageSource(): string {
    return this.refugee ? this.refugee.image : null;
  }

  getBio(): string {
    return this.refugee ? this.refugee.bio : this.defaultText;
  }

  getOriginCountry(): string {
    return this.refugee ? this.refugee.origin_country : '';
  }

  getGoals(): string {
    return this.refugee ? this.refugee.goals : this.defaultText;
  }

  getProfileColor(): string {
    return this.refugee ? this.refugee.profile_color : null;
  }

  getEmail(): string {
    return this.refugee ? this.refugee.email : this.defaultText;
  }

  getUsername(): string {
    return this.refugee ? this.refugee.username : null;
  }

  getPhone(): string {
    return this.refugee ? this.refugee.phone : '';
  }

  getAmountRaised(): string {
    return this.refugee ? this.refugee.amount_raised : '0';
  }

  getPendingDonation(): boolean {
    return this.refugee ? this.refugee.pending_donation : false;
  }

  getUserDonatedTo(): boolean {
    return this.refugee ? this.refugee.donated_to : false;
  }

  getDonationBttnDisabled(): boolean{
    return !this.refugee;
  }

  displayPopup($event: Event) {
    this.showPopup = true;
  }

  hidePopup($event: Event) {
    this.showPopup = false;
  }

  cancelClick($event: Event) {
    $event.stopPropagation();
  }

  onMakeDonation($event) {
    this.store.dispatch(new ReceiveDonation(
      {refugeeId: this.getId(), donation: $event.donation}
    ));
  }

}
