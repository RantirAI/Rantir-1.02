import {
    ActionIcon,
    Avatar,
    Box,
    Breadcrumbs,
    Burger,
    Button,
    Divider,
    Flex,
    Group,
    Input,
    Menu,
    Text,
    rem,
} from '@mantine/core';
import {
    IconBell,
    IconBox,
    IconChevronDown,
    IconChevronLeft,
    IconChevronRight,
    IconCompass,
    IconDots,
    IconSearch,
    IconSettings,
    IconStar,
} from '@tabler/icons-react';

type Props = {
    mobileOpened: boolean,
    sidebarMobileOpened: boolean,
    toggleMobile: () => void,
    toggleSidebarMobile: () => void,
}

export const Header = ({ mobileOpened, toggleMobile, toggleSidebarMobile }: Props) => {
    return (
        <>
            <Flex align="center" justify={"space-between"} gap={0} h={60} w={"100%"}>
                <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                <Group w={{ sm: "100%" }} align='center' justify='space-between'>
                    <Group>
                        <Input visibleFrom='sm' variant='unstyled' size='md' placeholder="Type anywhere to search" leftSection={<IconSearch size={20} />} w={240} />
                        <Divider visibleFrom='sm' orientation='vertical' />
                        <Breadcrumbs visibleFrom='sm' separator={<IconChevronRight stroke={1} size={20} />}>
                            <Group gap={8} opacity={0.5}>
                                <IconBox stroke={1.5} size={20} />
                                <Text>
                                    General
                                </Text>
                            </Group>
                            <Group gap={8}>
                                <IconCompass stroke={1.5} size={20} />
                                <Text>
                                    Start Here
                                </Text>
                                <ActionIcon variant='white'>
                                    <IconStar stroke={1.5} size={20} />
                                </ActionIcon>
                            </Group>
                        </Breadcrumbs>
                        <Group hiddenFrom='sm'>
                            <Button variant='default' p={8} py={2} disabled>Share</Button>
                            <Group>
                                <ActionIcon variant='white' >
                                    <IconDots size={20} />
                                </ActionIcon>
                                <ActionIcon variant='white' >
                                    <IconBell size={20} />
                                </ActionIcon>
                            </Group>
                            <Menu trigger='hover'>
                                <Menu.Target>
                                    <Group gap={4} align='center' style={{ cursor: "pointer" }}>
                                        <Avatar />
                                        <Text size='sm'>John Doe</Text>
                                        <IconChevronDown size={20} />
                                    </Group>
                                </Menu.Target>

                                <Menu.Dropdown>
                                    <Menu.Item
                                        leftSection={<IconSettings size={20} />}
                                        disabled
                                    >
                                        Profile Settings
                                    </Menu.Item>
                                </Menu.Dropdown>
                            </Menu>
                        </Group>
                    </Group>
                    <Group visibleFrom='sm'>
                        <Button variant='default' p={8} py={2} disabled>Share</Button>
                        <Group>
                            <ActionIcon variant='white' >
                                <IconDots size={20} />
                            </ActionIcon>
                            <ActionIcon variant='white' >
                                <IconBell size={20} />
                            </ActionIcon>
                        </Group>
                        <Divider visibleFrom='sm' orientation='vertical' />
                        <Menu trigger='hover'>
                            <Menu.Target>
                                <Group gap={4} align='center' style={{ cursor: "pointer" }}>
                                    <Avatar />
                                    <Text size='sm'>John Doe</Text>
                                    <IconChevronDown size={20} />
                                </Group>
                            </Menu.Target>

                            <Menu.Dropdown>
                                <Menu.Item
                                    leftSection={<IconSettings size={20} />}
                                    disabled
                                >
                                    Profile Settings
                                </Menu.Item>
                            </Menu.Dropdown>
                        </Menu>
                    </Group>
                </Group>
            </Flex>
        </>
    )
}