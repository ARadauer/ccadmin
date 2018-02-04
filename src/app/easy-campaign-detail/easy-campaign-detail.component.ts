import {Component, Input, OnInit} from '@angular/core';
import {Campaign} from '../easy-campaign/campaign';

@Component({
  selector: 'app-easy-campaign-detail',
  templateUrl: './easy-campaign-detail.component.html',
  styleUrls: ['./easy-campaign-detail.component.css']
})
export class EasyCampaignDetailComponent implements OnInit {

  constructor() { }
  @Input() campaign: Campaign;

  ngOnInit() {
  }

}
