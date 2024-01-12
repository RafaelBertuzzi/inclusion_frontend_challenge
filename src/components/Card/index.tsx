import { timestampToDate } from '@/utils/dates';
import { Container, Title, Status, Hostname, Timestamp } from './styles';
import GreenCheckmarkPNG from '../../assets/images/green_checkmark.png';
import RedErrorPNG from '../../assets/images/red-error.png';

interface IProps {
  title: string;
  hostname: string;
  lastTimeUpdated: number;
  isRunning: boolean;
}

export const Card = ({
  title,
  lastTimeUpdated,
  hostname,
  isRunning,
}: IProps) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Hostname>{hostname}</Hostname>
      <Timestamp>
        <span>{timestampToDate(lastTimeUpdated)}</span>
      </Timestamp>
      <Status>
        <img src={isRunning ? GreenCheckmarkPNG : RedErrorPNG} width={24} />
      </Status>
    </Container>
  );
};
