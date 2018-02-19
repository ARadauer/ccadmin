export class Campaign {
  id: number;
  name: string;
  options: Option[];

}

export class Option implements HasPositon {
  name: string;
  posX: number;
  posY: number;
}

export class Text implements HasPositon{
  name: string;
  content: string;
  posX: number;
  posY: number;
}
export interface HasPositon {
  posX: number;
  posY: number;
}

