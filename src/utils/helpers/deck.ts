import { Card } from "utils/constants";

const duplicateDeck = (deck: Card[]) => {
  let duplicatedDeck: Card[] = [];
  deck.forEach(
    card => (duplicatedDeck = duplicatedDeck.concat([{ ...card }, { ...card }]))
  );
  return duplicatedDeck;
};

const shuffleDeck = (deck: Card[]) => {
  return [...deck].sort(() => Math.random() - 0.5);
};

const normalizeDeck = (deck: Card[]) => {
  return [...deck].map(card => ({ ...card, isFlipped: false }));
};

export const prepareDeck = (deck: Card[]) => {
  return normalizeDeck(shuffleDeck(duplicateDeck(deck)));
};

export const checkGameOver = (deck: Card[]) => {
  return deck.every(card => card.isFlipped);
};
