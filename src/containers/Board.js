import React, { Component } from "react";
import styled from "styled-components";
import withDataFetching from "../withDataFetching";
import Lane from "../components/Lane/Lane";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 10%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Board = ({ lanes, loading, error, data }) => {
  return (
    <BoardWrapper>
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          title={lane.title}
          loading={loading}
          error={error}
          tickets={data.filter((ticket) => ticket.lane === lane.id)}
        />
      ))}
    </BoardWrapper>
  );
};

export default withDataFetching(Board);
