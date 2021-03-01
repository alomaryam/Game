import TheBoard from "./components/Board.js";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
  background-color: #02052B;
}
`;

function App() {
  return (
    <div>
      <GlobalStyle />
      <TheBoard />
    </div>
  );
}

export default App;
