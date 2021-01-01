import styled from "styled-components";

const Container = styled.a`
  background-color: ${(props) =>
    props.primary ? "var(--brand-color)" : "transparent"};
  padding: 8px 15px 12px;
  border-radius: ${(props) => (props.primary ? "100%" : "5px")};
  text-decoration: none;
  color: white;
//   font-size: 14px;
  cursor: pointer;

  :hover {
    opacity: 0.5;
    background-color: ${(props) =>
      props.primary
        ? "var(--brand-color)"
        : "var(--background-color-secondary)"};
  }
`;

function IconButton({ icon, primary }) {
  return (
    <Container primary={primary}>
      <span>{icon}</span>
    </Container>
  );
}

export default IconButton;
