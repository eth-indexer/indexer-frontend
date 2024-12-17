import { FC } from "react";
import { SearchIcon, SearchInputWrapper } from "./styles";
import Input from "../Input/Input";
import { Icon24 } from "../Icon";

interface SearchInputProps {
  value: string;
  placeholder?: string;
  size?: "small" | "medium" | "large";
  autofocus?: boolean;
  onChange: (text: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({
  value,
  placeholder,
  autofocus,
  onChange,
  size = "medium",
}) => {
  return (
    <SearchInputWrapper size={size}>
      <SearchIcon>
        <Icon24.Search />
      </SearchIcon>
      <Input
        placeholder={placeholder || "Block number or hash"}
        inputType="ghost"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus={autofocus}
      />
    </SearchInputWrapper>
  );
};

export default SearchInput;
