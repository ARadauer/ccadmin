import {Component, OnInit} from '@angular/core';
import {CampaignService} from "../campaign.service";
import {Campaign} from "../easy-campaign/campaign";

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  constructor(private campaignService: CampaignService) {

  }

  public getCampaigns(): Campaign {
    return this.campaignService.getCampaingns();
  }

  public dropSuccess(event: any): void {

    console.log('event', event);
    console.log('drop success von ', event.dragData);
    const mouseEvent: any = event.mouseEvent;
    console.log('drop success auf', mouseEvent.offsetX + "/" + mouseEvent.offsetY);
    console.log('drop success in ', mouseEvent.target.width + "/" + mouseEvent.target.height);
    const newPosX = mouseEvent.offsetX / mouseEvent.target.width * 100;
    const newPosY = mouseEvent.offsetY / mouseEvent.target.height * 100;
    console.log("neue position " + newPosX + "/" + newPosY);

    this.campaignService.updateOptions(event.dragData, newPosX, newPosY);
  }

  ngOnInit() {
  }

}
