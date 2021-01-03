import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: inherit;
  margin-top: 15px;

  > div {
    padding: 8px 20px;
    color: var(--content-color-secondary);
    font-size: 16px;
    cursor: pointer;
    border-bottom: 3px solid var(--background-color-primary);

    :hover {
      color: white;
    }

    &.active {
      border-bottom: 3px solid var(--brand-color);
      color: white;
    }
  }
`;

function TabController() {
  const [active, setActive] = useState("history");

  return (
    <Container>
      <div
        className={active === "history" ? "active" : undefined}
        onClick={() => setActive("history")}
      >
        History
      </div>
      <div
        className={active === "collections" ? "active" : undefined}
        onClick={() => setActive("collections")}
      >
        Collections
      </div>
      <div
        className={active === "apis" ? "active" : undefined}
        onClick={() => setActive("apis")}
      >
        APIs
      </div>
    </Container>
  );
}

export default TabController;
