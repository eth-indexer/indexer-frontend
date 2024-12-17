import React, { FC } from "react";

interface Props extends React.SVGProps<SVGSVGElement> {
  children?: React.ReactNode;
}

const Icon24: FC<Props> = ({ children, ...restProps }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...restProps}
    >
      {children}
    </svg>
  );
};

const Search: FC = () => {
  return (
    <Icon24>
      <path
        d="M21.5 21L15.5 15L21.5 21ZM17.5 10C17.5 13.866 14.366 17 10.5 17C6.63401 17 3.5 13.866 3.5 10C3.5 6.13401 6.63401 3 10.5 3C14.366 3 17.5 6.13401 17.5 10Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon24>
  );
};

export default {
  Search,
};
