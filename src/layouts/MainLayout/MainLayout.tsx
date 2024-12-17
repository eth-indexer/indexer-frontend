import { FC } from "react";
import { Container, MainLogo } from "./styles";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <MainLogo>Indexer</MainLogo>
      {children}
    </Container>
  );
};

export default MainLayout;
