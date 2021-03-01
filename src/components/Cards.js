import styled from "styled-components";
import { useState } from "react";
import useSound from "use-sound";
import soundEffect from "./zapsplat_multimedia_button_press_plastic_click_002_36869.mp3";
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

  const [play] = useSound(soundEffect, { volume: 0.05 });

  return (
    <div>
      {flipped === false ? (
        <CardImage
          onClick={() => {
            flippedCard();
            play();
          }}
          flipped={flipped}
          alt="backimage"
          src={card.backimage}
        />
      ) : (
        <CardImage
          onClick={() => {
            flippedCard();
            play();
          }}
          flipped={flipped}
          alt="cardimage"
          src={card.image}
        />
      )}
    </div>
  );
};
