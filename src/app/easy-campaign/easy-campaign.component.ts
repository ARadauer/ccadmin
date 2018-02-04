import {Component, OnInit} from '@angular/core';
import {Campaign, Option} from './campaign';
import {CampaignService} from '../campaign.service';

@Component({
  selector: 'app-easy-campaign',
  templateUrl: './easy-campaign.component.html',
  styleUrls: ['./easy-campaign.component.css']
})
export class EasyCampaignComponent implements OnInit {

  constructor(private campaignService: CampaignService) {

  }

  public selectedOption: Option;

  public campaign: Campaign;

  public getCampaigns(): void {
    this.campaign = this.campaignService.getCampaingns();
  }


  ngOnInit() {
    this.getCampaigns();
  }

  onSelect(option: Option): void {
    this.selectedOption = option;
  }

}
