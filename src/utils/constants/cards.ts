import pic00 from "assets/images/00.jpg";
import pic01 from "assets/images/01.jpg";
import pic02 from "assets/images/02.jpg";
import pic03 from "assets/images/03.jpg";
import pic04 from "assets/images/04.jpg";
import pic05 from "assets/images/05.jpg";
import pic06 from "assets/images/06.jpg";
import pic07 from "assets/images/07.jpg";

export interface Card {
  type: number;
  picture: string;
  isFlipped?: boolean;
}

export const CARD_DECK: Array<Card> = [
  {
    type: 0,
    picture: pic00
  },
  {
    type: 1,
    picture: pic01
  },
  {
    type: 2,
    picture: pic02
  },
  {
    type: 3,
    picture: pic03
  },
  {
    type: 4,
    picture: pic04
  },
  {
    type: 5,
    picture: pic05
  },
  {
    type: 6,
    picture: pic06
  },
  {
    type: 7,
    picture: pic07
  }
];
