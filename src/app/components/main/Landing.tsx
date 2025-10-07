"use client"
import { Box, Heading, HStack, Link } from "@chakra-ui/react"
import { Tooltip } from "../tooltip"
import { icons } from "@/data/socialsData"


export const Landing = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize="48px" color={"white"} padding={3}>Anthony Micco</Heading>
                <Heading size={"xl"} fontSize={"36px"} padding={3}>Software Developer</Heading>
                <HStack paddingTop={4}>
                    {icons(36).map((icon, index) => (
                        <Tooltip
                            key={index}
                            content={icon.name}
                            contentProps={{ css: { "--tooltip-bg": icon.backgroundColor, "color": icon.color } }}
                        >
                            <Link href={icon.url} target="_blank">
                                <Box
                                    bg={icon.backgroundColor}
                                    p={2}
                                    borderRadius={"md"}
                                >
                                    {icon.icon}
                                </Box>
                            </Link>
                        </Tooltip>
                    ))}
                </HStack>
            </Box>
        </>
    )
}
