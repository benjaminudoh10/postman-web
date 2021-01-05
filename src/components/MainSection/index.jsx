import styled from "styled-components";

import HistoryPanel from "./HistoryPanel";
import MainPanel from "./MainPanel";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-top: 15px;
`;

function MainSection() {
  return (
    <Container>
      <HistoryPanel />
      <MainPanel />
    </Container>
  );
}

export default MainSection;
