import styled from "styled-components";

const Container = styled.a`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  padding: 8px 15px 8px;
  border-radius: ${(props) => (props.primary ? "100%" : "5px")};
  text-decoration: none;
  color: ${(props) => (props.color ? props.color : "white")};
  cursor: pointer;

  :hover {
    opacity: 0.5;
    background-color: ${(props) =>
      props.hoverBackgroundColor
        ? props.hoverBackgroundColor
        : "var(--background-color-secondary)"};
  }
`;

function IconButton({ icon, backgroundColor, hoverBackgroundColor, color }) {
  return (
    <Container
      backgroundColor={backgroundColor}
      hoverBackgroundColor={hoverBackgroundColor}
      color={color}
    >
      <span>{icon}</span>
    </Container>
  );
}

export default IconButton;
