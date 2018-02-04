import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyCampaignDetailComponent } from './easy-campaign-detail.component';

describe('EasyCampaignDetailComponent', () => {
  let component: EasyCampaignDetailComponent;
  let fixture: ComponentFixture<EasyCampaignDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyCampaignDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyCampaignDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
