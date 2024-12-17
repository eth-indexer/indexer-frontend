import styled from "styled-components";

export const BlockRowWrapper = styled.div`
  padding: 10px;
  width: 100%;
  cursor: pointer;
  border-bottom: 1px solid rgba(14, 16, 13, 0.5);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(0, 143, 17, 0.05);
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
