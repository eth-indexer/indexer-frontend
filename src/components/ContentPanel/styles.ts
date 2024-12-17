import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
  background-color: #ffffff;
`;

export const Title = styled.div`
  font-size: 18px;
  font-weight: 600;
  width: 100%;
  border-bottom: 1px solid #f2f2f2;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  max-height: 576px;
  overflow-y: auto;
`;
