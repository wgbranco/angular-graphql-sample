import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'donation-popup',
  templateUrl: './donation-popup.component.html',
  styleUrls: ['./donation-popup.component.scss']
})
export class DonationPopupComponent implements OnInit {

  form: FormGroup;
  pendingDonation: boolean;

  @Input() refugeeName: string;
  @Input() set pending(value: boolean) {
    value
    ? this.form.disable()
    : this.form.enable();

    this.pendingDonation = value;
  }
  @Input() donationSuccessful: boolean;
  @Output() closed: EventEmitter<any> = new EventEmitter();
  @Output() submitted: EventEmitter<number> = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      donation: ['', [Validators.required, Validators.min(1)]]
    });
  }

  ngOnInit() { }

  donate(value: number) {
    if (!this.form.valid) return;
    
    this.submitted.emit(this.form.value);
  }

  close($event: any) {
    this.closed.emit($event);
  }

}
