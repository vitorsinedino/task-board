import React from "react";
import styled from "styled-components";

const TicketWrapper = styled.div`
  background: darkGray;
  padding: 20px;
  border-radius: 20px;

  &:not(:last-child) {
    margin-botton: 5%;
  }
`;

const Title = styled.h3`
  width: 100%;
  margin: 0px;
`;

const Body = styled.p`
  width: 100%;
`;

const Ticket = ({ ticket }) => (
  <TicketWrapper>
    <title>{ticket.title}</title>
    <Body>{ticket.body}</Body>
  </TicketWrapper>
);

export default Ticket;
