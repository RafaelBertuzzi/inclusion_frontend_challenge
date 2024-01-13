import { updateHealthStatus } from '@/redux/reducers/healthStatusReducer';
import { endpoints } from '@/utils/endpoints';
import { useQueries } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const fetchData = async (endpoint: string) => {
  const response = await fetch(
    `https://api.factoryfour.com/${endpoint}/health/status`,
  );
  return response.json();
};

export const useGetData = () => {
  const dispatch = useDispatch();

  const queries = useQueries({
    queries: endpoints.map((endpoint) => {
      return {
        queryKey: [endpoint],
        queryFn: () => fetchData(endpoint),
        retry: false,
        refetchInterval: 15000,
      };
    }),
  });

  useEffect(() => {
    queries.forEach((query) => {
      dispatch(
        updateHealthStatus({
          endpoint: query?.data?.hostname?.split('-')[0],
          data: query?.data,
        }),
      );
    });
  }, [queries]);
};
