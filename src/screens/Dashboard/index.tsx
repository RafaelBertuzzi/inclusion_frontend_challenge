import { Card } from '@/components/Card';
import { Container, Header } from './styles';

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <h1>System Status</h1>
      </Header>

      <Card
        lastTimeUpdated={1705092908422}
        title="users"
        isRunning
        hostname="default-1535bc67f49b"
      />
    </Container>
  );
};
