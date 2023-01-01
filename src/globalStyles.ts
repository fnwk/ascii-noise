import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
html,
body {
  height: 100%;
  overflow: hidden;
  background: #05012a;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Courier, monospace;
  color: #67619a;
}

.ASCII {
  position: absolute;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-width: 100vw;
}

.ASCII p {
  white-space: nowrap;
  width: 100%;
  font-size: 18px;
}

`;

export default GlobalStyles;
