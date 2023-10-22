import { RouteType } from './Types';

import { Home, Login, Register } from '@/Pages';

export const CommonRoutes: RouteType[] = [
  {
    path: '/',
    element: <Home />
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
