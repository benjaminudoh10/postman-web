import styled from "styled-components";
import HistoryList from "./HistoryList";

import TabController from "../TabView/TabController";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

function TabView() {
  return (
    <Container>
      <TabController active="history" />
      <HistoryList />
    </Container>
  );
}

export default TabView;
