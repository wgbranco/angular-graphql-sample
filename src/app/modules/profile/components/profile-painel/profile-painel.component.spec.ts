import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePainelComponent } from './profile-painel.component';

describe('ProfilePainelComponent', () => {
  let component: ProfilePainelComponent;
  let fixture: ComponentFixture<ProfilePainelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePainelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePainelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
