import { AppShell, Box } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Aside } from './Aside';
import { Footer } from './Footer';
export const Layout = ({ children, admin, both }: any) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [sidebarMobileOpened, { toggle: toggleSidebarMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);

  return (
    // <AuthGuard admin>
    <AppShell
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
      }}
      aside={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { mobile: !sidebarMobileOpened, desktop: true },
      }}
      padding="md"
      style={{ overflow: "hidden" }}
    >
      <AppShell.Navbar p="md">
        <Navbar desktopOpened={desktopOpened} mobileOpened={mobileOpened} toggleDesktop={toggleDesktop} toggleMobile={toggleMobile} />
      </AppShell.Navbar>
      <AppShell.Main py={0}>
        <Header mobileOpened={mobileOpened} toggleMobile={toggleMobile} sidebarMobileOpened={sidebarMobileOpened} toggleSidebarMobile={toggleSidebarMobile} />
        <Box mih={"90vh"}>
          {children}
        </Box>
        <Footer />
      </AppShell.Main>
      <AppShell.Aside>
        <Aside sidebarMobileOpened={sidebarMobileOpened} toggleSidebarMobile={toggleSidebarMobile} />
      </AppShell.Aside>
    </AppShell>
    // </AuthGuard>
  );
};
