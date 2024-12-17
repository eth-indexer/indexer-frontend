import styled from "styled-components";

export const SearchInputWrapper = styled.div<{
  size: "small" | "medium" | "large";
}>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #ffffff;
  border-radius: 30px;
  padding: ${({ size }) => (size === "small" ? "5px" : "10px")};
`;

export const SearchIcon = styled.div`
  color: rgba(59, 38, 81, 0.4);
  margin-right: 10px;
`;
