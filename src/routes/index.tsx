import { useGetData } from '@/hooks/useGetData';
import { Dashboard } from '@/screens/Dashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
]);

export const Routes = () => {
  useGetData();

  return <RouterProvider router={router} />;
};
