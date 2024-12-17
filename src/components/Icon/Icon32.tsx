import React, { FC } from "react";

interface Props {
  children?: React.ReactNode;
}

const Icon32: FC<Props> = ({ children }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
};

const BoxClosed: FC = () => {
  return (
    <Icon32>
      <path
        d="M30 25.625L16 30L2 25.625V6.375L16 2L30 6.375V25.625Z"
        fill="#E6B171"
      />
      <path
        d="M16 11.625V30M16 11.625L30 6.375M16 11.625L2 6.375M16 30L30 25.625V6.375M16 30L2 25.625V6.375M30 6.375L16 2L2 6.375"
        stroke="#C4945B"
        stroke-width="0.46875"
      />
      <path
        d="M20.1176 9.87495L7.76465 4.79991L11.8823 3.57495L25.0588 8.12495V17.75L20.1176 19.5V9.87495Z"
        fill="#E0DFDF"
      />
    </Icon32>
  );
};

const BoxOpen: FC = () => {
  return (
    <Icon32>
      <path
        d="M25.9491 26.4103L15.8214 30L5.69373 26.4103V17.2121L2 15.641L5.69373 10.6154L2 6.30769L12.1277 2L15.8214 7.02564L19.8723 2L30 6.30769L25.9491 10.6154L30 15.641L25.9491 17.3641V26.4103Z"
        fill="#E6B171"
      />
      <path
        d="M15.8214 14.9231V30M15.8214 14.9231L25.9491 10.6154M15.8214 14.9231L5.69373 10.6154M15.8214 30L25.9491 26.4103V17.3641M15.8214 30L5.69373 26.4103V17.2121M25.9491 10.6154L15.8214 7.02564M25.9491 10.6154L30 6.30769L19.8723 2L15.8214 7.02564M25.9491 10.6154L30 15.641L25.9491 17.3641M5.69373 10.6154L15.8214 7.02564M5.69373 10.6154L2 15.641L5.69373 17.2121M5.69373 10.6154L2 6.30769L12.1277 2L15.8214 7.02564M5.69373 17.2121L12.1277 19.9487L15.7021 14.9231L19.8723 19.9487L25.9491 17.3641"
        stroke="#C4945B"
        stroke-width="0.292308"
      />
    </Icon32>
  );
};

export default { BoxClosed, BoxOpen };