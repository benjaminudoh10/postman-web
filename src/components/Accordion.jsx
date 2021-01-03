import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Container = styled.div`
  display: flex;
  justify-contents: flex-start;
  align-items: center;
  color: white;
  padding: 0 8px;

  :hover {
    background-color: var(--background-color-secondary);
  }

  > * {
    margin-right: 15px;

    :last-child {
      margin-right: 0;
    }
  }

  p {
    font-size: 14px;
    font-weight: 600;
  }
`;

export default function Accordion({ children, date }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container onClick={() => setOpen(!open)}>
        <FontAwesomeIcon
          icon={open ? faChevronDown : faChevronRight}
          color={"var(--content-color-secondary)"}
          size={"xs"}
        />
        <p>{date}</p>
      </Container>
      {open && children}
    </>
  );
}
