import styled from "styled-components";

import Button from "../Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faCog,
  faBell,
  faHeart,
  faSync,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import IconButton from "../IconButton";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > * {
    margin-right: 8px;

    :last-child {
      margin-right: 15px;
    }
  }
`;

function RightItems() {
  return (
    <Container>
      <IconButton
        icon={<FontAwesomeIcon icon={faSync} />}
        backgroundColor="var(--brand-color)"
        hoverBackgroundColor="var(--brand-color)"
      />
      <IconButton icon={<FontAwesomeIcon icon={faCoffee} />} />
      <IconButton icon={<FontAwesomeIcon icon={faCog} />} />
      <IconButton icon={<FontAwesomeIcon icon={faBell} />} />
      <IconButton icon={<FontAwesomeIcon icon={faHeart} />} />
      <IconButton
        icon={<FontAwesomeIcon icon={faUtensils} />}
        backgroundColor="var(--brand-color)"
        hoverBackgroundColor="var(--brand-color)"
      />
      <Button color="var(--brand-color)" text="Upgrade" />
    </Container>
  );
}

export default RightItems;
