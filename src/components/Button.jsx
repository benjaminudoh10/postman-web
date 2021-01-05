import styled from "styled-components";

const Container = styled.a`
  background-color: ${(props) =>
    props.color ? props.color : "var(--background-color-secondary)"};
  padding: 8px 15px;
  border-radius: 3px;
  color: white;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;

  :hover {
    opacity: 0.5;
  }

  > span {
    margin-right: 5px;
  }
`;

function Button({ text, icon, color }) {
  return (
    <Container color={color}>
      {icon && <span>{icon}</span>}
      {text}
    </Container>
  );
}

export default Button;
