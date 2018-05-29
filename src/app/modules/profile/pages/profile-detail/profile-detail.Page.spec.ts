import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailPage } from './profile-detail.page';

describe('ProfileDetailPage', () => {
  let component: ProfileDetailPage;
  let fixture: ComponentFixture<ProfileDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileDetailPage ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
