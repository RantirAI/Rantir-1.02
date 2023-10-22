import { AuthGuard } from '@/Guards/AuthAccess';
export const Layout = ({ children, admin, both }: any) => {
  return <AuthGuard admin>{children}</AuthGuard>;
};
