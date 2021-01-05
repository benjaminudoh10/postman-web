import styled from "styled-components";
import Accordion from "../../../../components/Accordion";
import HistoryItem from "../HistoryItem";

const Container = styled.div`
  overflow: scroll;
  cursor: pointer;
  height: 80vh;
`;

export default function HistoryList() {
  return (
    <Container>
      <Accordion date="December 30">
        <HistoryItem method="get"></HistoryItem>
        <HistoryItem method="post"></HistoryItem>
        <HistoryItem method="post"></HistoryItem>
        <HistoryItem method="get"></HistoryItem>
      </Accordion>
      <Accordion date="November 3">
        <HistoryItem method="put"></HistoryItem>
        <HistoryItem method="delete"></HistoryItem>
        <HistoryItem method="get"></HistoryItem>
        <HistoryItem method="post"></HistoryItem>
      </Accordion>
      <Accordion date="July 12">
        <HistoryItem method="put"></HistoryItem>
        <HistoryItem method="post"></HistoryItem>
        <HistoryItem method="post"></HistoryItem>
        <HistoryItem method="post"></HistoryItem>
      </Accordion>
      <Accordion date="July 11">
        <HistoryItem method="get"></HistoryItem>
        <HistoryItem method="delete"></HistoryItem>
      </Accordion>
    </Container>
  );
}
