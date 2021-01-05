import styled from "styled-components";

import Button from "../Button";
import IconButton from "../IconButton";
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
      <Button
        text="New"
        icon={<FontAwesomeIcon icon={faPlus} />}
        color="var(--brand-color)"
      />
      <Button text="Import" />
      <Button text="Runner" />
      <IconButton
        icon={<FontAwesomeIcon icon={faPlus} />}
        backgroundColor="var(--background-color-secondary)"
      />
    </Container>
  );
}

export default LeftItems;
