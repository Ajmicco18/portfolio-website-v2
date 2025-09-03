"use client"
import { Box, Heading, Text, HStack, Link, IconButton } from "@chakra-ui/react"

export const Experience = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize={{ base: "32px", md: "48px" }} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>Experience</Heading>
                <Text as={"p"} padding={3} color={"white"} fontWeight={"bold"}>Experience Section
                </Text>

            </Box>
        </>
    )
}