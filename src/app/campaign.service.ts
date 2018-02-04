import {Injectable} from '@angular/core';
import {Campaign} from './easy-campaign/campaign';
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
    ]
  };

  public updateOptions(name: string, newPosX: number, newPosY: number) {
    for (let option of this.campaign.options) {
      if (option.name === name) {
        option.posX = newPosX;
        option.posY = newPosY;
      }
    }
  }

  getCampaingns(): Campaign {
    return this.campaign;
  }
}
