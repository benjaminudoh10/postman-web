import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  border-radius: 30px;
  border: 1px solid var(--background-color-secondary);
  background-color: var(--background-color-secondary);
  padding: 8px 10px;
  color: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 8px;

  input:focus {
    outline: none;
  }

  :hover {
    background-color: transparent;
    border: 1px solid var(--background-color-secondary);
  }

  input {
    background-color: inherit;
    border: none;
    color: white;
    margin-left: 10px;
    padding: 1px 10px;
    size: 28;
  }
`;

function SearchBox() {
  return (
    <Container>
      <FontAwesomeIcon icon={faSearch} size="xs" />
      <input type="text" placeholder="Filter" />
    </Container>
  );
}

export default SearchBox;
