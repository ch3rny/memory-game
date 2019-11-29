import React, { useCallback, useState, useMemo } from "react";
import { Card, CARD_DECK } from "utils/constants";
import { CardItem } from "components/card-item";
import { ScoreBoard } from "components/score-board";
import { prepareDeck, checkGameOver } from "utils/helpers";

const EMPTY_INDEX = -1;

export const GameBoard = () => {
  const [deck, setDeck] = useState<Card[]>(prepareDeck(CARD_DECK));

  const [prevCardIndex, setPrevCardIndex] = useState(EMPTY_INDEX);

  const [movesCount, setMovesCount] = useState(0);

  const gameOver = useMemo(() => checkGameOver(deck), [deck]);

  const resetGame = useCallback(() => {
    setDeck(prepareDeck(CARD_DECK));
    setMovesCount(0);
    setPrevCardIndex(EMPTY_INDEX);
  }, []);

  const handleMatch = useCallback(() => {
    setPrevCardIndex(EMPTY_INDEX);
  }, []);

  const handleMiss = useCallback(
    (index: number) => {
      const tempoDeck = [...deck];
      tempoDeck[prevCardIndex].isFlipped = false;
      tempoDeck[index].isFlipped = false;
      setDeck(tempoDeck);
      setPrevCardIndex(EMPTY_INDEX);
    },
    [prevCardIndex, deck]
  );

  const checkPair = useCallback(
    (index: number) => {
      setMovesCount(movesCount + 1);
      deck[index].type === deck[prevCardIndex].type
        ? handleMatch()
        : handleMiss(index);
    },
    [movesCount, prevCardIndex, deck, handleMatch, handleMiss]
  );

  const flipCard = useCallback(
    (index: number) => {
      const tempoDeck = [...deck];
      tempoDeck[index].isFlipped = !tempoDeck[index].isFlipped;
      setDeck(tempoDeck);
      prevCardIndex === EMPTY_INDEX
        ? setPrevCardIndex(index)
        : setTimeout(() => checkPair(index), 1000);
    },
    [prevCardIndex, deck, checkPair]
  );

  return gameOver ? (
    <ScoreBoard movesCount={movesCount} onClick={() => resetGame()} />
  ) : (
    <>
      <div className="game-board">
        {deck.map((card, index) => (
          <CardItem key={index} card={card} onClick={() => flipCard(index)} />
        ))}
      </div>
      <div className="game-controls">
        <div className="moves-count"> moves: {movesCount}</div>
        <button className="reset-button" onClick={() => resetGame()}>
          Reset game
        </button>
      </div>
    </>
  );
};
