import styled from "styled-components";

import SearchBox from "./SearchBox";
import TabView from "./TabView";

const Container = styled.div`
  max-width: 25%;
`;

function HistoryPanel() {
  return (
    <Container>
      <SearchBox />
      <TabView active="history" />
    </Container>
  );
}

export default HistoryPanel;
