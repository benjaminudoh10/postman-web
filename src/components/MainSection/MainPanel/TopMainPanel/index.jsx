import styled from "styled-components";

import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

const Container = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-start;
  background-color: var(--background-color-secondary);
  border-bottom: 0;
  border-left: 0;
`;

function TopMainPanel() {
  return (
    <Container>
      <LeftSection />
      <RightSection />
    </Container>
  );
}

export default TopMainPanel;
