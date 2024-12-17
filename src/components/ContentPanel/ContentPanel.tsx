import { FC } from "react";
import { Container, Content, Title } from "./styles";

interface ContentPanelProps {
  title: string;
  children: React.ReactNode;
}

const ContentPanel: FC<ContentPanelProps> = ({ title, children }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default ContentPanel;
