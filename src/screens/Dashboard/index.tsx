import { Card } from '@/components/Card';
import { endpoints } from '@/utils/endpoints';
import { CardWrapper, Container, Header } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <h1>System Status</h1>
      </Header>

      <CardWrapper>
        {endpoints.map((endpoint) => (
          <Card key={endpoint} endpoint={endpoint} />
        ))}
      </CardWrapper>
    </Container>
  );
};
