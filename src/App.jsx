import styled from "styled-components";

const Main = styled.div`
  font-size: 16px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: #2b2a29;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 100vw;
`;

function App() {
  return (
    <Main></Main>
  );
}

export default App;
