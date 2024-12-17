import styled from "styled-components";

export const StateViewContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 200px;
  padding: 20px 20px 40px;
`;

export const EmptyState = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
  font-size: 18px;
  color: #999999;
`;

export const StateBlockHash = styled.div`
  font-size: 20px;
  font-weight: 600;
  font-family: VT323, monospace;
  margin-bottom: 10px;
  color: #00670c;
`;

export const OperatorInfo = styled.div`
  margin-bottom: 20px;
  color: #6c757d;
`;

export const InfoTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
`;

export const InfoRow = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const InfoValue = styled.div`
  margin-left: 5px;
  font-weight: 600;
  font-size: 14px;
`;
