import styled from "styled-components";

import LeftItems from "./LeftItems";
import MiddleItems from "./MiddleItems";
import RightItems from "./RightItems";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function TopBar() {
  return <Container>
      <LeftItems></LeftItems>
      <MiddleItems></MiddleItems>
      <RightItems></RightItems>
  </Container>;
}

export default TopBar;
