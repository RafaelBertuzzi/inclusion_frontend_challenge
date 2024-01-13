import { Loading } from '@/components/Loading';
import { useGetData } from '@/hooks/useGetData';
import { Dashboard } from '@/screens/Dashboard';
import { RouterProvider, createHashRouter } from 'react-router-dom';

const router = createHashRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
]);

export const Routes = () => {
  const { isInitialLoading } = useGetData();

  if (isInitialLoading) {
    return <Loading />;
  }

  return <RouterProvider router={router} />;
};
