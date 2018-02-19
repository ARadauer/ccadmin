import {Injectable} from '@angular/core';
import {Campaign, HasPositon} from './easy-campaign/campaign';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';


@Injectable()
export class CampaignService {


  constructor() {
  }

  private campaign = {
    id: 1,
    name: 'Test Campaign',
    options: [
      {name: 'Austattung', posX: 83, posY: 15},
      {name: 'Farbe', posX: 11, posY: 45},
      {name: 'logo', posX: 25, posY: 49}
    ],
    texts: [
      { name: 'text1', content: '<p>Das ist ein <b>Text1</b></p>', posX: 10, posY: 10},
      { name: 'text2', content: '<p>Das ist ein <b>Text2</b></p>',  posX: 10, posY: 20}
    ]
  };

  public updateOptions(dragData: HasPositon, newPosX: number, newPosY: number) {
    dragData.posX = newPosX;
    dragData.posY = newPosY;
   /* for (let option of this.campaign.options) {
      if (option.name === name) {
        option.posX = newPosX;
        option.posY = newPosY;
      }
    }*/
  }

  getCampaingns(): Campaign {
    return this.campaign;
  }
}
