import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUtensils,
  faTrashAlt,
  faPlus,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 12px 8px;
  max-height: 55px;
  cursor: pointer;

  svg {
    opacity: 0;
  }

  :hover {
    background-color: var(--background-color-secondary);

    svg {
      opacity: 1;
    }

    .overlay {
      display: block;
    }
  }

  > * {
    margin-right: 10px;
  }

  .overlay {
    display: none;
    > * {
      padding: 10px;
    }
  }
`;

const RequestMethod = styled.p`
  font-weight: 800;
  font-size: 10px;
  color: ${(props) =>
    props.method === "get"
      ? "green"
      : props.method === "delete"
      ? "red"
      : props.method === "put"
      ? "#3e90d2"
      : props.method === "post"
      ? "orange"
      : ""};
  text-transform: uppercase;
  min-width: 25px;
`;

const RequestUrl = styled.p`
  color: var(--content-color-secondary);
  line-break: anywhere;
  line-height: 20px;
  overflow: auto;
  font-size: 12px;
`;

const ActionOverlay = styled.div`
  background-color: var(--background-color-secondary);
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  position: relative;
  right: 0;
`;

const HistoryItem = function ({ method }) {
  return (
    <Container>
      <FontAwesomeIcon
        icon={faUtensils}
        fontSize={"xs"}
        color={"var(--brand-color)"}
      />
      <RequestMethod method={method}>
        {method === "delete" ? "del" : method}
      </RequestMethod>
      <RequestUrl>
        http://www.google.com?q=ytfnhgvbdj&amp;asd=kjhvbnjhgfvbnkjhg&amp;size=240
      </RequestUrl>
      <ActionOverlay className="overlay">
        <FontAwesomeIcon
          icon={faPlus}
          fontSize={"xs"}
          color={"var(--content-color-secondary)"}
        />
        <FontAwesomeIcon
          icon={faTrashAlt}
          fontSize={"xs"}
          color={"var(--content-color-secondary)"}
        />
        <FontAwesomeIcon
          icon={faEllipsisH}
          fontSize={"xs"}
          color={"var(--content-color-secondary)"}
        />
      </ActionOverlay>
    </Container>
  );
};

export default HistoryItem;
