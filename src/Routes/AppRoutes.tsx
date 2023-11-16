import { useRoutes } from 'react-router-dom';

import { CommonRoutes } from './CommonRoutes';

export const AppRoutes = () => {
  return useRoutes([...CommonRoutes]);
};
