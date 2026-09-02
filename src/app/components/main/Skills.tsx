"use client";
import { Box, Heading, Text, HStack } from "@chakra-ui/react"
import { frontendIcons, backendIcons, dataScienceIcons, devOpsIcons } from "@/data/skillsData";
import { Tooltip } from "../tooltip";

export const Skills = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "85%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize={{ base: "32px", md: "48px" }} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#C80815"}>Skills</Heading>
                <Box display={"flex"} margin={"auto"} flexDirection={{ base: "column", md: "row" }} w={"100%"} flexWrap={"wrap"} textAlign={"center"} justifyContent={"center"} alignItems={"center"}>
                    <Box width={{ base: "100%", md: "45%" }} p={2} margin={"auto"}>
                        <Heading fontSize={{ base: "20px", md: "28px" }} fontWeight={"bold"} color={"black"} >Frontend Development</Heading>
                        <HStack mt={5} flexWrap={"wrap"} justifyContent={"center"}>
                            {frontendIcons(30, "white").map((iconObj, index) => (
                                <Tooltip
                                    key={index}
                                    content={iconObj.name}
                                    contentProps={{ css: { "--tooltip-bg": iconObj.backgroundColor }, color: "white" }}>
                                    <Box
                                        p={3}
                                        bg={iconObj.backgroundColor}
                                        borderRadius={"md"}
                                    >
                                        {iconObj.icon}
                                    </Box>
                                </Tooltip>
                            ))}
                        </HStack>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} p={2} margin={"auto"}>
                        <Heading fontSize={{ base: "20px", md: "28px" }} fontWeight={"bold"} color={"black"} >Backend Development</Heading>
                        <HStack mt={5} flexWrap={"wrap"} justifyContent={"center"}>
                            {backendIcons(30, "white").map((iconObj, index) => (
                                <Tooltip
                                    key={index}
                                    content={iconObj.name}
                                    contentProps={{ css: { "--tooltip-bg": iconObj.backgroundColor }, color: "white" }}>
                                    <Box
                                        p={3}
                                        bg={iconObj.backgroundColor}
                                        borderRadius={"md"}
                                    >
                                        {iconObj.icon}
                                    </Box>
                                </Tooltip>
                            ))}
                        </HStack>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} p={2} margin={"auto"} my={4}>
                        <Heading fontSize={{ base: "20px", md: "28px" }} fontWeight={"bold"} color={"black"} >Data Science & ML</Heading>
                        <HStack mt={5} flexWrap={"wrap"} justifyContent={"center"}>
                            {dataScienceIcons(30, "white").map((iconObj, index) => (
                                <Tooltip
                                    key={index}
                                    content={iconObj.name}
                                    contentProps={{ css: { "--tooltip-bg": iconObj.backgroundColor }, color: "white" }}>
                                    <Box
                                        p={3}
                                        bg={iconObj.backgroundColor}
                                        borderRadius={"md"}
                                    >
                                        {iconObj.icon}
                                    </Box>
                                </Tooltip>
                            ))}
                        </HStack>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} p={2} margin={"auto"} my={4}>
                        <Heading fontSize={{ base: "20px", md: "28px" }} fontWeight={"bold"} color={"black"} >Cloud & DevOps</Heading>
                        <HStack mt={5} flexWrap={"wrap"} justifyContent={"center"}>
                            {devOpsIcons(30, "white").map((iconObj, index) => (
                                <Tooltip
                                    key={index}
                                    content={iconObj.name}
                                    contentProps={{ css: { "--tooltip-bg": iconObj.backgroundColor }, color: "white" }}>
                                    <Box
                                        p={3}
                                        bg={iconObj.backgroundColor}
                                        borderRadius={"md"}
                                    >
                                        {iconObj.icon}
                                    </Box>
                                </Tooltip>
                            ))}
                        </HStack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}
