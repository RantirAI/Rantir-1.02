import { Layout } from '@/Layouts';
import { RouteType } from './Types';

import { Home, Login, Register } from '@/Pages';
import { Document } from '@/Pages/Document';

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
    path: '/document',
    element: (
      <Layout>
        <Document />
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
