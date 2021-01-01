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

function LeftItems() {
  return (
    <Container>
      <Button text="New" icon={<FontAwesomeIcon icon={faPlus} />} primary />
      <Button text="Import" />
      <Button text="Runner" />
      <Button icon={<FontAwesomeIcon icon={faPlus} />} />
    </Container>
  );
}

export default LeftItems;
