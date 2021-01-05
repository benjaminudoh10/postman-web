import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  border: 1px solid var(--highlight-background-color-tertiary);
  border-radius: 3px 3px 0 0;
  font-size: 14px;
  cursor: pointer;

  svg {
    color: var(--content-color-secondary);
    padding: 9px 10px;

    :hover {
      color: var(--brand-color);
    }

    :last-child {
      border-left: 1px solid var(--highlight-background-color-tertiary);
    }
  }
`;

function ActionButtonGroup() {
  return (
    <Container>
      <FontAwesomeIcon icon={faPlus} fontSize={"xs"} />
      <FontAwesomeIcon icon={faEllipsisH} fontSize={"xs"} />
    </Container>
  );
}

export default ActionButtonGroup;
