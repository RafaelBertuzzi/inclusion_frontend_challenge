import { Dashboard } from '@/screens/Dashboard';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
