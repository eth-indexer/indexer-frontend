import styled from "styled-components";

export const BlockRowWrapper = styled.div`
  padding: 10px;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.02);
  }
`;

export const Table = styled.div`
  width: 100%;
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #999999;
`;
