import styled from "styled-components";
import TopBar from "./components/TopBar";
import MainSection from "./components/MainSection";

const Main = styled.div`
  font-size: 16px;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--background-color-primary);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: fixed;
`;

function App() {
  return (
    <Main>
      <TopBar />
      <MainSection />
    </Main>
  );
}

export default App;
