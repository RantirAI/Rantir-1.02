import { iconPNG } from '@/Shared/Images';
import { Anchor, Box, Divider, Flex, Group, Image, Text } from '@mantine/core';

export const Footer = () => {
    return (
        <>
            <Flex direction={{ base: "column", md: "row" }} align="center" justify={"space-between"} gap={4} w={"100%"}>
                <Flex align="center" justify="page-between" direction={{ base: "column", md: "row" }} gap={4}>
                    <Text size='sm'>Copyright © 2024 Rantir A. ll rights reserved.</Text>
                    <Group>
                    <Anchor<'a'> href="/register" fw={500} c="violet" size='sm'>
                        Terms of use
                    </Anchor>
                    <Divider orientation='vertical' />
                    <Anchor<'a'> href="/register" fw={500} c="violet" size='sm'>
                        Privacy Policy
                    </Anchor>
                    </Group>
                </Flex>

                <Group>
                    <Anchor<'a'> href="/register" fw={500} c="violet" size='sm'>
                        Hand Crafted
                    </Anchor>
                    <Text size='sm'>& Made with Love ®.</Text>
                    <Group gap={2}>
                        <Image src={iconPNG} w="14" />
                        <Text>Rantir</Text>
                    </Group>
                </Group>
            </Flex>
        </>
    )
}