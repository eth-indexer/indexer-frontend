import styled from "styled-components";
import { InputType } from "./Input";

export const StyledInput = styled.input<{
  inputType?: InputType;
  smallSize?: boolean;
  redBorder?: boolean;
}>`
  padding: 8px 12px;
  border: 1px solid
    ${({ redBorder }) => (redBorder ? "rgba(234, 67, 53, 1)" : "#d7d3dc")};
  border-radius: 4px;
  width: 100%;
  font-weight: 600;
  color: #008f11;
  font-family: "VT323";

  &::placeholder {
    color: rgba(0, 143, 17, 0.8);
  }

  ${({ smallSize }) =>
    smallSize
      ? `
    font-size: 14px;
    line-height: 18px;
    padding: 8px;
  `
      : `
    font-size: 20px;
    line-height: 20px;
  `}

  outline: none;

  ${({ inputType }) =>
    inputType === "ghost" &&
    `
    border: none;
    background-color: transparent;
    padding: 0;
  `}
`;

export const StyledTextarea = styled.textarea<{
  customBottomPadding?: number;
  customHeight?: number;
  disableScroll?: boolean;
  fullHeight?: boolean;
}>`
  padding: 8px 12px;
  ${({ customBottomPadding }) =>
    customBottomPadding && `padding-bottom: ${customBottomPadding}px;`}
  border: 1px solid #d7d3dc;
  border-radius: 4px;
  width: 100%;
  min-height: ${({ customHeight }) => customHeight || 295}px;
  max-height: ${({ customHeight, fullHeight }) =>
    !fullHeight ? customHeight || "295px" : "100%"};
  ${({ fullHeight }) =>
    fullHeight &&
    `
  height: 100%;
  min-height: unset;
  `}
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  outline: none;
  ${({ disableScroll }) => disableScroll && `overflow-y: hidden;`}
`;

export const TextareaLabel = styled.div`
  font-size: 14px;
  line-height: 28px;
  font-weight: 500;
`;

export const InputLabel = styled.div`
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  margin-bottom: 5px;
`;
