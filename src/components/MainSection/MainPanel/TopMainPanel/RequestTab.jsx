import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  border: 1px solid var(--highlight-background-color-tertiary);
  border-radius: 3px 3px 0 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 8px 0 0;
  padding: 8px;
  cursor: pointer;
  min-width: 150px;

  :hover {
    svg {
      opacity: 1;
    }
  }

  &.active {
    border-top: 2px solid var(--brand-color);
    background-color: var(--background-color-primary);
    border-bottom: 1px solid var(--background-color-primary);

    svg {
      opacity: 1;
    }
  }

  .req__method {
    color: green;
    font-size: 10px;
    margin-right: 3px;
    flex-grow: 1;
    font-weight: 600;
  }

  .req__title {
    color: white;
    font-size: 12px;
    margin-right: 3px;
    flex-grow: 10;
  }

  .req__close {
    flex-grow: 1;
  }

  svg {
    opacity: 0;
    font-size: 12px;
  }

  * {
    margin: 0;
  }
`;

function RequestTab({ active }) {
  return (
    <Container className={active ? "active" : undefined}>
      <p className="req__method">GET</p>
      <p className="req__title">Untitled Request</p>
      <FontAwesomeIcon
        icon={faTimes}
        fontSize={"xs"}
        color={"white"}
        className="req__close"
      />
    </Container>
  );
}

export default RequestTab;
