import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyCampaignComponent } from './easy-campaign.component';

describe('EasyCampaignComponent', () => {
  let component: EasyCampaignComponent;
  let fixture: ComponentFixture<EasyCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EasyCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
