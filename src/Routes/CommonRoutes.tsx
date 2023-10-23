import { Layout } from '@/Layouts';
import { RouteType } from './Types';

import { Home, Login, Register } from '@/Pages';

export const CommonRoutes: RouteType[] = [
  {
    path: '/',
    element: (
      <Layout>
        <Home />
      </Layout>
    )
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
];
