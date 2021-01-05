import styled from "styled-components";

import TopMainPanel from "./TopMainPanel";

const Container = styled.div`
  width: 80%;
  height: 90vh;
  border: 1px solid var(--content-color-secondary);
  border-top: 0;
  border-right: 0;
`;

function MainPanel() {
  return (
    <Container>
      <TopMainPanel />
    </Container>
  );
}

export default MainPanel;
