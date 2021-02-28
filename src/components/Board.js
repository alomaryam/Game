import { CardList } from "./Cardlist.js";
import { Cards } from "./Cards.js";

import styled from "styled-components";

// const CardStyle = styled.button`
//   height: 250px;
//   width: 250px;
//   border-radius: 5px;
//   margin: 5px;
//   float: left;
//   transition: transform 0.8s;
//   font-size: 20pt;
//   text-align: center;
//   align-content: center;
//   padding-top: 30px;
//   flex-wrap: wrap;
//   justify-content: center;
//   display: flex;
//   justify-self: center;

/* border-style: ${(props) => props.theme.borderStyle};
  border: ${(props) => props.theme.border};*/

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 270px);
  grid-template-rows: repeat(4, 270px);
`;

const TheBoard = () => {
  const CardsonBoard = CardList.sort(
    () => Math.random() - 0.5
  ).map((thecard) => <Cards card={thecard} key={thecard.id} />);

  return <Grid>{CardsonBoard}</Grid>;
};

export default TheBoard;
