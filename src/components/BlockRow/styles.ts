import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;

  &:last-child {
    border-bottom: none;
  }
`;

export const BlockIcon = styled.div`
  width: 48px;
  height: 48px;
  background-color: #f2f2f2;
  border-radius: 4px;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 20px;
`;

export const BlockNumber = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #41b3ff;
`;

export const BlockTimestamp = styled.div`
  font-size: 12px;
  color: #6c757d;
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const BlockHash = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

export const KeysNonce = styled.div`
  font-size: 14px;
  color: "#6c757d";
`;
