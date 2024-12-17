import { FC } from "react";
import { Container } from "./styles";
import { Icon24 } from "../Icon";

interface SpinnerProps {
  size?: "large" | "small";
}

const Spinner: FC<SpinnerProps> = ({ size = "small" }) => {
  return (
    <Container size={size}>
      <Icon24.Spinner />
    </Container>
  );
};

export default Spinner;
