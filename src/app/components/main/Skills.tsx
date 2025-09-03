"use client"
import { Box, Heading, Text, HStack, Link, IconButton } from "@chakra-ui/react"

export const Skills = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize={{ base: "32px", md: "48px" }} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>Skills</Heading>
                <Box display={"flex"} margin={"auto"} flexDirection={{ base: "column", md: "row" }} w={"100%"} flexWrap={"wrap"} textAlign={"center"} justifyContent={"center"} alignItems={"center"}>
                    <Box width={{ base: "100%", md: "45%" }} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "16px", md: "32px" }} fontWeight={"bold"} color={"white"} >Languages</Text>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "16px", md: "32px" }} fontWeight={"bold"} color={"white"} >Frontend</Text>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "16px", md: "32px" }} fontWeight={"bold"} color={"white"} >Backend</Text>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "16px", md: "32px" }} fontWeight={"bold"} color={"white"} >Miscellaneous</Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}