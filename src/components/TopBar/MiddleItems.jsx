import styled from "styled-components";

import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin-right: 8px;

    :last-child {
      margin-right: 0;
    }
  }
`;

function MiddleItems() {
  return (
    <Container>
      <Button text="My Workspace" icon={<FontAwesomeIcon icon={faPlus} />}></Button>
      <Button text="Invite" icon={<FontAwesomeIcon icon={faPlus} />}></Button>
    </Container>
  );
}

export default MiddleItems;
