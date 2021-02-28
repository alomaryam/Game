import styled from "styled-components";
import { useState } from "react";

const CardImage = styled.img`
  display: flex;
  flex-wrap: wrap;

  height: 250px;
  width: 250px;
  border-radius: 5px;
`;

export const Cards = (props) => {
  const card = props.card;

  const [flipped, setFlipped] = useState(card.flipped);

  const flippedCard = () => {
    setFlipped(flipped === false ? true : false);
  };

  return (
    <div>
      {flipped === false ? (
        <CardImage
          onClick={flippedCard}
          alt="cardbackimage"
          src={card.backimage}
        />
      ) : (
        <CardImage onClick={flippedCard} alt="cardimage" src={card.image} />
      )}
    </div>
  );
};
