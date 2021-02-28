// import { Card } from "./components/Cards.js";
import TheBoard from "./components/Board.js";
// import { useState } from "react";
// import { ThemeProvider } from "styled-components";

// const card = {
//   FaceDown: {
//     borderStyle: "solid",
//     border: "yellowgreen",
//     backgroundColor: "yellowgreen",
//   },
//   FaceUp: {
//     borderStyle: "solid",
//     border: "blue",
//     backgroundColor: "blue",
//   },
// };

function App() {
  // const [flipped, setFlip] = useState("FaceDown");

  // const flippedCard = () => {
  //   setFlip(flipped === "FaceDown" ? "FaceUp" : "FaceDown");
  // };

  return (
    <div>
      <TheBoard />
    </div>
  );
}

export default App;
