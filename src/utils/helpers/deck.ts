import { Card } from "utils/constants";

const duplicateDeck = (deck: Card[]) => {
  let duplicatedDeck: Card[] = [];
  deck.forEach(
    card =>
      (duplicatedDeck = duplicatedDeck.concat([
        { ...card, isFlipped: false },
        { ...card, isFlipped: false }
      ]))
  );
  return duplicatedDeck;
};

const shuffleDeck = (deck: Card[]) => {
  return [...deck].sort(() => Math.random() - 0.5);
};

export const prepareDeck = (deck: Card[]) => {
  return shuffleDeck(duplicateDeck(deck));
};

export const checkGameOver = (deck: Card[]) => {
  return deck.every(card => card.isFlipped);
};
