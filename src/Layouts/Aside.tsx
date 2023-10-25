import { ActionIcon, Avatar, Breadcrumbs, Burger, Button, Group, Input, Menu, Stack, Text, TextInput, rem } from '@mantine/core';
import { IconBell, IconBox, IconChevronDown, IconChevronRight, IconCompass, IconDots, IconSearch, IconSettings, IconStar } from '@tabler/icons-react';

type Props = {
    sidebarMobileOpened: boolean,
    toggleSidebarMobile: () => void
}

export const Aside = ({ sidebarMobileOpened, toggleSidebarMobile }: Props) => {
    return (
        <Stack p={20}>
            <Group justify='space-between'>
                <Breadcrumbs separator={<IconChevronRight stroke={1} size={20} />}>
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
                <Burger opened={sidebarMobileOpened} onClick={toggleSidebarMobile} hiddenFrom="sm" size="sm" />
            </Group>
            <TextInput placeholder="Type anywhere to search" leftSection={<IconSearch size={20} />} />
        </Stack>
    )
}