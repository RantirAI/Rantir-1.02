import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Flex,
  Group,
  Image,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title
} from '@mantine/core';
import classes from './Login.module.css';
import LoginFooterImg from '@/Shared/Images/Login/LoginFooter.svg';
import LoginLogo from '@/Shared/Images/Login/loginLogo.png';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const navigate = useNavigate();

  return (
    <Flex className={classes.wrapper} justify="space-between" align="end">
      <Stack w={'50%'} p={'xl'} visibleFrom="md">
        <Text lineClamp={0.8} size="40px" maw={'70%'} fw="bold">
          Rantir is the simplest and fastest way to build AI based dashboards, smart docs & dynamic
          interfaces
        </Text>
        <Text maw={'60%'}>
          Our beautifully-designed AI-based Document Framework come with hundreds of customizable
          features. Every Layout is just a starting point. ©2024 All Rights Reserved. Rantir®{' '}
          <span style={{ fontWeight: 'bolder' }}>hello@rantir.com</span>
        </Text>
      </Stack>
      <Paper className={classes.form} radius={0} p={30}>
        <Stack gap={2}>
          <Image src={LoginLogo} w="80" ml={-20} />
          <Title order={2} fw="400" className={classes.title}>
            Get Started <br /> with your Dashboard
          </Title>
          <Text mb={50}>Sign in to your account</Text>

          <TextInput placeholder="Login" size="md" />
          <PasswordInput placeholder="Password" mt="md" size="md" />
          <Checkbox label="Remember me" mt="xl" size="md" />

          <Flex justify="end" w="100%">
            <Button mt="xl" size="md" bg={"violet"}>
              Sign In
            </Button>
          </Flex>

          <Text mt="md">
            <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()} c="violet">
              Lost your password?
            </Anchor>
          </Text>
          <Text>
            Don&apos;t have an account?{' '}
            <Anchor<'a'> href="/register" fw={700} onClick={(event) => navigate('/register')} c="violet">
              SignUp Now
            </Anchor>
          </Text>
        </Stack>
        <Stack>
          <Image src={LoginFooterImg} w="80" />
          <Group align="center" gap={0}>
            <Text size="sm" mr={8}>
              ©2019-2024 All Rights Reserved. Rantir®
            </Text>
            <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()} c="violet">
              Cookie Policy
            </Anchor>
            <Anchor<'a'> href="#" size="sm" onClick={(event) => event.preventDefault()} c="violet">
              Privacy and Terms
            </Anchor>
          </Group>
        </Stack>
      </Paper>
    </Flex>
  );
};
