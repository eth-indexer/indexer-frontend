import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  background-color: #272827;
  overflow: hidden;
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  font-weight: 600;
  width: 100%;
  background-color: #191c18;
  border-bottom: 1px solid #0e100d;
  color: #008f11;
  padding: 10px;
  font-family: "VT323", monospace;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  max-height: 576px;
  overflow-y: auto;
`;
