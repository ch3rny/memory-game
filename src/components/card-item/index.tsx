import React, { useMemo } from "react";
import { Card } from "utils/constants";
import cover from "assets/images/cover.jpg";
interface CardItemProps {
  card: Card;
  onClick: () => void;
}

export const CardItem = ({
  card: { isFlipped, picture },
  onClick
}: CardItemProps) => {
  const style = useMemo(
    () => ({ background: `url(${isFlipped ? picture : cover})` }),
    [isFlipped, picture]
  );

  return (
    <div
      className="card"
      style={style}
      onClick={isFlipped ? () => {} : onClick}
    />
  );
};
