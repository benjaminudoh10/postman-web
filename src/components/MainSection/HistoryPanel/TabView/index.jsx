import styled from "styled-components";
import HistoryList from "./HistoryList";

import TabController from "../TabView/TabController";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const BottomBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 4px 8px;
  position: sticky;
  bottom: 0;
  font-size: 14px;

  > p {
    text-transform: uppercase;
    color: white;
    font-weight: 600;
  }

  > * {
    margin-right: 12px;
  }
`;

function TabView() {
  return (
    <Container>
      <TabController active="history" />
      <HistoryList></HistoryList>
      <BottomBar>
        <FontAwesomeIcon icon={faArchive} fontSize={"xs"} color={"white"} />
        <p>Archived Histories (3)</p>
      </BottomBar>
    </Container>
  );
}

export default TabView;
