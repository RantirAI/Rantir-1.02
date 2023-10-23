import { Anchor, Box, Button, Checkbox, Container, Flex, Group, Image, Input, Paper, PasswordInput, Stack, Text, TextInput, Title, rem } from '@mantine/core';
import classes from "./Register.module.css"
import LoginFooterImg from '@/Shared/Images/Login/LoginFooter.svg'
import LoginLogo from '@/Shared/Images/Login/loginLogo.png'
import { Dropzone } from '@mantine/dropzone';
import { IconPhoto, IconUpload, IconX } from '@tabler/icons-react';


export const Register = () => {
  return (
    <Group justify='center'>
      <Stack className={classes.form} p={30} justify='space-between' maw={{ sm: "90%", md: "70%", lg: "40%" }}>
        <Stack gap={2}>
          <Stack maw={{ sm: "80%" }}>
            <Image src={LoginFooterImg} w="60" />
            <Title order={2} mb={50} mt={20} fw="400" className={classes.title}>
              Start Creating <br /> AI Interfaces & Dashboards is easy
            </Title>
            <Text mb={20}>
              Create a Rantir account, and start a team name, upload an avatar and icon and import your documents.
            </Text>
          </Stack>

          <Stack w="100%">
            <Flex gap={10} direction={{ base: 'column', sm: "row" }}>
              <TextInput placeholder="First Name" w="100%" size='md' />
              <TextInput placeholder="Last Name" w={"100%"} size='md' />
            </Flex>
            <Flex gap={10}>
              <TextInput w="90%" placeholder="Team Name" size='md' />
              <Box w="10%">
                <Dropzone
                  onDrop={(files) => console.log('accepted files', files)}
                  onReject={(files) => console.log('rejected files', files)}
                  maxSize={3 * 1024 ** 2}
                >
                  <Stack justify='center' align='center' h={10}>
                    <Dropzone.Accept >
                      <IconUpload
                        style={{ width: rem(45), height: rem(45), color: 'var(--mantine-color-blue-6)' }}
                        stroke={1.5}
                      />
                    </Dropzone.Accept>
                    <Dropzone.Reject>
                      <IconX
                        style={{ width: rem(45), height: rem(45), color: 'var(--mantine-color-red-6)' }}
                        stroke={1.5}
                      />
                    </Dropzone.Reject>
                    <Dropzone.Idle>
                      <IconPhoto
                        style={{ width: rem("45px"), height: rem("45px"), color: 'var(--mantine-color-dimmed)' }}
                        stroke={1.5}
                      />
                    </Dropzone.Idle>
                  </Stack>
                </Dropzone>
              </Box>
            </Flex>
            <PasswordInput
              size='md'
              placeholder="Password"
            />
            <Input placeholder='Email' size='md' type='email'></Input>
          </Stack>

          <Group mt="xl" align='center' justify='space-between'>
            <Group align='center'>
              <Checkbox label={
                <Text>I agree to the Pages Terms & Privacy</Text>
              } />
            </Group>
            <Anchor<'a'> href="#" fw={700} onClick={(event) => event.preventDefault()}>
              <Text>Help? Contact Support</Text>
            </Anchor>
          </Group>

          <Flex justify="start">
            <Button mt="xl" size="md" radius="sm" bg="violet">
              Create a new account
            </Button>
          </Flex>

        </Stack>
        <Group>
          <Image src={LoginLogo} w="80" ml={-20} />
          <Stack gap={0}>
            <Text size='sm' mr={8}>
              ©2019-2024 All Rights Reserved. Rantir®
            </Text>
            <Group>
              <Anchor<'a'> href="#" size='sm' onClick={(event) => event.preventDefault()} c="violet">
                Cookie Policy
              </Anchor>
              <Anchor<'a'> href="#" size='sm' onClick={(event) => event.preventDefault()} c="violet">
                Privacy and Terms
              </Anchor>
            </Group>
          </Stack>
        </Group>
      </Stack>
    </Group>
  )
};