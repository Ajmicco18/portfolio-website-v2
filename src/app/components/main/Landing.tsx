"use client"
import { Box, Heading, HStack, Link, IconButton } from "@chakra-ui/react"
import { SocialsIcons } from "@/data/SocialsIcons"

export const Landing = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize="48px" color={"white"} padding={3}>Anthony Micco</Heading>
                <Heading size={"xl"} fontSize={"36px"} padding={3}>Software Developer</Heading>
                <SocialsIcons />
            </Box>
        </>
    )
}
