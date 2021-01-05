import styled from "styled-components";

import RequestTab from "./RequestTab";
import ActionButtonGroup from "./ActionButtonGroup";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 8px;
  flex-basis: 80%;
`;

function LeftSection() {
  return (
    <Container>
      <RequestTab active />
      <RequestTab />
      <RequestTab />
      <ActionButtonGroup />
    </Container>
  );
}

export default LeftSection;
