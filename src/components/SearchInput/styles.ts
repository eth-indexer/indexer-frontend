import styled from "styled-components";

export const SearchInputWrapper = styled.div<{
  size: "small" | "medium" | "large";
}>`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #272827;
  border-radius: 30px;
  padding: ${({ size }) => (size === "small" ? "5px" : "10px")};
`;

export const SearchIcon = styled.div`
  color: rgba(0, 143, 17, 0.4);
  margin-right: 10px;
`;
