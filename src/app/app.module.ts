import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {DndModule} from 'ng2-dnd';

import { AppComponent } from './app.component';
import { EasyCampaignComponent } from './easy-campaign/easy-campaign.component';
import { EasyCampaignDetailComponent } from './easy-campaign-detail/easy-campaign-detail.component';
import {CampaignService} from './campaign.service';
import { CarComponent } from './car/car.component';


@NgModule({
  declarations: [
    AppComponent,
    EasyCampaignComponent,
    EasyCampaignDetailComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    DndModule.forRoot(),
    FormsModule
  ],
  providers: [CampaignService],
  bootstrap: [AppComponent]
})
export class AppModule { }
