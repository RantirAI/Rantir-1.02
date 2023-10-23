import { ActionIcon, Badge, Burger, Button, Group, Menu, Paper, Skeleton, Stack, Text, UnstyledButton, rem } from '@mantine/core'
import { IconArrowLeft, IconArrowRight, IconBox, IconChargingPile, IconChevronDown, IconDashboard, IconDots, IconFilePlus, IconGlobe, IconLayout, IconLayoutDashboard, IconPlus, IconSettings, IconSquareRounded, IconStar, IconTable, IconWorldShare } from '@tabler/icons-react'

type Props = {
    desktopOpened: boolean,
    mobileOpened: boolean,
    toggleDesktop: () => void,
    toggleMobile: () => void
}

export const Navbar = ({ desktopOpened, mobileOpened, toggleMobile, toggleDesktop }: Props) => {
    return (
        <>
            <Stack pos="absolute" right={-12} top={"50%"} gap={6} visibleFrom='sm'>
                <ActionIcon variant='filled' bg="#ddd" radius="xl" size="sm" disabled={desktopOpened}>
                    <IconArrowRight onClick={() => {
                        toggleMobile()
                        toggleDesktop()
                    }} size="xs" />
                </ActionIcon>
                <ActionIcon variant='filled' bg="#ddd" radius="xl" size="sm" disabled={!desktopOpened}>
                    <IconArrowLeft onClick={() => {
                        toggleMobile()
                        toggleDesktop()
                    }} size="xs" />
                </ActionIcon>
            </Stack>
            <Stack gap={30}>
                <Group justify='space-between'>
                    <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                    <Text>Rantir</Text>
                    <Menu>
                        <Menu.Target>
                            <Group gap={4} align='center' style={{ cursor: "pointer" }}>
                                <Paper p={12} bg="#ddd" withBorder radius="sm"></Paper>
                                <Text fw="bold" size='sm'>BrandWeld</Text>
                                <IconChevronDown size={"16"} />
                            </Group>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Item
                                leftSection={<IconChargingPile style={{ width: rem(14), height: rem(14) }} />}
                                disabled
                            >
                                Other Workspace
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                    <Badge radius="sm" variant='filled' bg="#FFBF00">90+</Badge>
                </Group>
                <Button my={5} fullWidth radius="sm">
                    <IconFilePlus />
                    <Text size='md'>New Document</Text>
                </Button>

                <Button w="100%" variant='white' component={Group} justify='space-between' p={0}>
                    <IconSettings />
                    <Text ml={10} size='md'>Settings & Members</Text>
                </Button>

                {/* Dashboard Navbar */}
                <Stack align='start' w="100%" gap={6}>
                    <Group justify='space-between' w="100%">
                        <Group gap={10}>
                            <IconTable />
                            <Text>Dashboards</Text>
                        </Group>
                        <ActionIcon variant='white' >
                            <IconPlus />
                        </ActionIcon>
                    </Group>

                    <Stack ml={4} gap={4} w="100%">
                        <Group justify='space-between' w="100%">
                            <Group gap={10}>
                                <IconLayout size={16} />
                                <Text size='sm'>Untitled</Text>
                            </Group>
                            <Badge variant='filled' bg={"#000"} radius="sm">Published</Badge>
                        </Group>
                        <Group gap={10}>
                            <IconLayout size={16} />
                            <Text size='sm'>Settings</Text>
                        </Group>
                    </Stack>
                </Stack>

                {/* Projects Navbar */}
                <Stack align='start' w="100%" gap={6}>
                    <Group justify='space-between' w="100%">
                        <Group gap={10}>
                            <IconBox />
                            <Text>Projects</Text>
                        </Group>
                        <ActionIcon variant='white' >
                            <IconPlus />
                        </ActionIcon>
                    </Group>
                    <Stack ml={4} gap={4} w="100%" align='end'>
                        <Group justify='space-between' w="100%">
                            <Group gap={10}>
                                <IconSquareRounded size={16} />
                                <Text size='sm'>Untitled</Text>
                            </Group>
                            <ActionIcon variant='white' >
                                <IconPlus size={16} />
                            </ActionIcon>

                        </Group>
                        <Group justify='space-between' w="100%" pl="10%" bg={"#ddd"}>
                            <Group gap={10}>
                                <IconSquareRounded size={16} />
                                <Text size='sm'>Untitled</Text>
                            </Group>
                            <ActionIcon variant='white' bg="transparent">
                                <IconDots size={16} />
                            </ActionIcon>
                        </Group>
                        <Group justify='space-between' w="100%" pl="10%">
                            <Group gap={10}>
                                <IconSquareRounded size={16} />
                                <Text size='sm'>Untitled</Text>
                            </Group>
                            <ActionIcon variant='white' >
                                <IconChevronDown size={16} />
                            </ActionIcon>
                        </Group>
                        <Group justify='space-between' w="100%">
                            <Group gap={10}>
                                <IconSquareRounded size={16} />
                                <Text size='sm'>Untitled</Text>
                            </Group>
                            <ActionIcon variant='white' >
                                <IconPlus size={16} />
                            </ActionIcon>
                        </Group>
                    </Stack>
                </Stack>

                {/* Favorites Navbar */}
                <Stack align='start' w="100%" gap={6}>
                    <Group justify='space-between' w="100%">
                        <Group gap={10}>
                            <IconStar />
                            <Text>Favorites</Text>
                        </Group>
                        <ActionIcon variant='white' >
                            <IconPlus />
                        </ActionIcon>
                    </Group>
                    <Stack ml={4} gap={4} w="100%">
                        <Group justify='space-between' w="100%">
                            <Group gap={10}>
                                <IconLayout size={16} />
                                <Text size='sm'>Untitled</Text>
                            </Group>
                        </Group>
                        <Group gap={10}>
                            <IconLayout size={16} />
                            <Text size='sm'>Settings</Text>
                        </Group>
                    </Stack>
                </Stack>

                {/* Shared Navbar */}
                <Stack align='start' w="100%" gap={6}>
                    <Group justify='space-between' w="100%">
                        <Group gap={10}>
                            <IconWorldShare />
                            <Text>Shared</Text>
                        </Group>
                        <ActionIcon variant='white' >
                            <IconPlus />
                        </ActionIcon>
                    </Group>
                    <Stack ml={4} gap={4} w="100%">
                        <Group justify='space-between' w="100%">
                            <Group gap={10}>
                                <IconLayout size={16} />
                                <Text size='sm'>Untitled</Text>
                            </Group>
                        </Group>
                        <Group gap={10}>
                            <IconLayout size={16} />
                            <Text size='sm'>Settings</Text>
                        </Group>
                    </Stack>
                </Stack>

            </Stack>

        </>
    )
}