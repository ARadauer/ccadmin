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

  private dragStartOffsetX = 0;
  private dragStartOffsetY = 0;

  public getCampaigns(): Campaign {
    return this.campaignService.getCampaingns();
  }

  public dropSuccess(event: any): void {

    if(!event.dragData){
      return;
    }
    console.log('event', event);
    console.log('drop success von ', event.dragData);
    const mouseEvent: any = event.mouseEvent;
    console.log('drop success auf', mouseEvent.offsetX + "/" + mouseEvent.offsetY);
    console.log('drop success in ', mouseEvent.target.width + "/" + mouseEvent.target.height);
    const newPosX = (mouseEvent.offsetX-this.dragStartOffsetX) / mouseEvent.target.width * 100;
    const newPosY = (mouseEvent.offsetY-this.dragStartOffsetY) / mouseEvent.target.height * 100;
    console.log("neue position " + newPosX + "/" + newPosY);

    this.campaignService.updateOptions(event.dragData, newPosX, newPosY);
  }

  ngOnInit() {
  }

  dragStart($event) {
    console.log('drag start', $event);
    const mouseEvent: any = $event.mouseEvent;
    console.log('drag start mouseEvent ', mouseEvent );
    console.log('drag start in ', mouseEvent.offsetX + "/" + mouseEvent.offsetY);
    this.dragStartOffsetX = mouseEvent.offsetX;
    this.dragStartOffsetY = mouseEvent.offsetY;
  }
}
