import { TEndpoint } from '@/interfaces/index';
import { useAppSelector } from '@/redux/hooks';
import { timestampToDate } from '@/utils/dates';
import GreenCheckmarkPNG from '../../assets/images/green_checkmark.png';
import RedErrorPNG from '../../assets/images/red-error.png';
import {
  Container,
  ErrorMessage,
  Hostname,
  Status,
  Timestamp,
  Title,
} from './styles';

interface IProps {
  endpoint: TEndpoint;
}

export const Card = ({ endpoint }: IProps) => {
  const endpointData = useAppSelector((state) => state.healthStatus[endpoint]);
  const isSuccess = !!endpointData;

  return (
    <Container isSuccess={isSuccess}>
      <Title>{endpoint}</Title>
      <Hostname>
        {isSuccess ? endpointData?.hostname : 'Not Available'}
      </Hostname>
      {isSuccess ? (
        <Timestamp>
          <span>
            {endpointData?.time ? timestampToDate(endpointData?.time) : '-'}
          </span>
        </Timestamp>
      ) : (
        <ErrorMessage>
          <span>error</span>
        </ErrorMessage>
      )}
      <Status>
        <img src={isSuccess ? GreenCheckmarkPNG : RedErrorPNG} width={24} />
      </Status>
    </Container>
  );
};
