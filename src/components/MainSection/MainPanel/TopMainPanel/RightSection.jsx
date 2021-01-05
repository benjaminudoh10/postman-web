import styled from "styled-components";

import Button from "../../../Button";
import IconButton from "../../../IconButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faSlidersH } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  display: flex;
  flex-basis: 20%;
  border-left: 1px solid var(--highlight-background-color-tertiary);
  justify-content: space-around;
  align-items: center;
`;

function RightSection() {
  return (
    <Container>
      <Button text="Archimydes dev" color="var(--background-color-tertiary)" />
      <IconButton
        icon={<FontAwesomeIcon icon={faEye} />}
        backgroundColor="var(--background-color-tertiary)"
      />
      <IconButton
        icon={<FontAwesomeIcon icon={faSlidersH} />}
        backgroundColor="var(--background-color-tertiary)"
      />
    </Container>
  );
}

export default RightSection;
