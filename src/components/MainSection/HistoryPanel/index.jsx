import styled from "styled-components";

import SearchBox from "./SearchBox";
import TabView from "./TabView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 20%;
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

function HistoryPanel() {
  return (
    <Container>
      <SearchBox />
      <TabView active="history" />
      <BottomBar>
        <FontAwesomeIcon icon={faArchive} fontSize={"xs"} color={"white"} />
        <p>Archived Histories (3)</p>
      </BottomBar>
    </Container>
  );
}

export default HistoryPanel;
