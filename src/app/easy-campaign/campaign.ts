export class Campaign {
  id: number;
  name: string;
  options: Option[];

}

export class Option {
  name: string;
  posX: number;
  posY: number;
}
