import React, { forwardRef } from "react";
import {
  InputLabel,
  StyledInput,
  StyledTextarea,
  TextareaLabel,
} from "./styles";

export type InputType = "primary" | "ghost";

export interface InputProps {
  inputType?: InputType;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onKeyDown?: (
    e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onBlur?: (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type?: string;
  name?: string;
  id?: string;
  disabled?: boolean;
  autoFocus?: boolean;
  label?: string;
  smallSize?: boolean;
  textarea?: boolean;
  customBottomPadding?: number;
  customHeight?: number;
  disableScroll?: boolean;
  redBorder?: boolean;
  fullHeight?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return props.textarea ? (
    <>
      {props.label && <TextareaLabel>{props.label}</TextareaLabel>}
      <StyledTextarea {...props} />
    </>
  ) : (
    <>
      {props.label && <InputLabel>{props.label}</InputLabel>}
      <StyledInput ref={ref} {...props} />
    </>
  );
});

Input.displayName = "Input";

export default Input;
