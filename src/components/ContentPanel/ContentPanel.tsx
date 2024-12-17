import { FC } from "react";
import { Container, Content, Title } from "./styles";
import Spinner from "../Spinner";

interface ContentPanelProps {
  title: string;
  children: React.ReactNode;
  loading?: boolean;
}

const ContentPanel: FC<ContentPanelProps> = ({ title, children, loading }) => {
  return (
    <Container>
      <Title>
        {title} {loading && <Spinner />}
      </Title>
      <Content>{children}</Content>
    </Container>
  );
};

export default ContentPanel;
