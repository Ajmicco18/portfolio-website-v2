"use client"
import { Box, Heading, Text, HStack } from "@chakra-ui/react"
import {
    FaPython,
    FaJs,
    FaCss3Alt,
    FaHtml5,
    FaJava,
    FaReact,
    FaGithub
} from "react-icons/fa";

import {
    SiMysql,
    SiSqlite,
    SiTableau,
    SiCplusplus,
    SiJupyter,
    SiDjango,
    SiFastapi,
    SiVite,
    SiNextdotjs,
    SiJira,
    SiR
} from "react-icons/si";

import {
    BiLogoVisualStudio,
    BiLogoMicrosoftTeams
} from "react-icons/bi";

import { VscAzureDevops } from "react-icons/vsc";

export const Skills = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize={{ base: "32px", md: "48px" }} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>Skills</Heading>
                <Box display={"flex"} margin={"auto"} flexDirection={{ base: "column", md: "row" }} w={"100%"} flexWrap={"wrap"} textAlign={"center"} justifyContent={"center"} alignItems={"center"}>
                    <Box width={{ base: "100%", md: "45%" }} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "16px", md: "32px" }} fontWeight={"bold"} color={"white"} >Languages</Text>
                        <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
                            <Box bg={"blue"} borderRadius={"md"} p={3}>
                                <SiCplusplus size={25} style={{ backgroundColor: "blue" }} />
                            </Box>
                            <Box bg={"gray"} borderRadius={"md"} p={3}>
                                <FaJava size={25} style={{ backgroundColor: "gray" }} />
                            </Box>
                            <Box bg={"purple"} borderRadius={"md"} p={3}>
                                <FaPython size={25} style={{ backgroundColor: "purple" }} />
                            </Box>
                            <Box bg={"yellow"} borderRadius={"md"} p={3}>
                                <FaJs size={25} style={{ backgroundColor: "yellow" }} />
                            </Box>
                            <Box bg={"orange"} borderRadius={"md"} p={3}>
                                <FaHtml5 size={25} style={{ backgroundColor: "orange" }} />
                            </Box>
                            <Box bg={"red"} borderRadius={"md"} p={3}>
                                <FaCss3Alt size={25} style={{ backgroundColor: "red" }} />
                            </Box>
                        </HStack>
                        <Text>C++, Java, Python, JS, HTML, CSS</Text>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "16px", md: "32px" }} fontWeight={"bold"} color={"white"} >Software Development</Text>
                        <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
                            <Box bg={"teal"} borderRadius={"md"} p={3}>
                                <FaReact size={25} style={{ backgroundColor: "teal" }} />
                            </Box>
                            <Box bg={"white"} borderRadius={"md"} p={3}>
                                <SiNextdotjs size={25} style={{ backgroundColor: "white" }} />
                            </Box>
                            <Box bg={"lightblue"} borderRadius={"md"} p={3}>
                                <SiVite size={25} style={{ backgroundColor: "lightblue" }} />
                            </Box>
                            <Box bg={"green"} borderRadius={"md"} p={3}>
                                <SiDjango size={25} style={{ backgroundColor: "green" }} />
                            </Box>
                            <Box bg={"darkgray"} borderRadius={"md"} p={3}>
                                <SiFastapi size={25} style={{ backgroundColor: "dark gray" }} />
                            </Box>
                        </HStack>
                        <Text>React, NextJS, Vite, Django, FastAPI</Text>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "16px", md: "32px" }} fontWeight={"bold"} color={"white"} >Data Science</Text>
                        <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
                            <Box bg={"blue"} borderRadius={"md"} p={3}>
                                <SiMysql size={25} style={{ backgroundColor: "blue" }} />
                            </Box>
                            <Box bg={"gray"} borderRadius={"md"} p={3}>
                                <SiSqlite size={25} style={{ backgroundColor: "gray" }} />
                            </Box>
                            <Box bg={"lightblue"} borderRadius={"md"} p={3}>
                                <SiR size={25} style={{ backgroundColor: "lightblue" }} />
                            </Box>
                            <Box bg={"skyblue"} borderRadius={"md"} p={3}>
                                <SiTableau size={25} style={{ backgroundColor: "skyblue" }} />
                            </Box>
                            <Box bg={"orange"} borderRadius={"md"} p={3}>
                                <SiJupyter size={25} style={{ backgroundColor: "orange" }} />
                            </Box>
                        </HStack>
                        <Text>SQL, SQLite, R, Tableau, Jupyter Lab,</Text>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "16px", md: "32px" }} fontWeight={"bold"} color={"white"} >Version Control/DevOps</Text>
                        <HStack flexWrap={"wrap"} justifyContent={"flex-end"}>
                            <Box bg={"blue"} borderRadius={"md"} p={3}>
                                <BiLogoVisualStudio size={25} style={{ backgroundColor: "blue" }} />
                            </Box>
                            <Box bg={"violet"} borderRadius={"md"} p={3}>
                                <FaGithub size={25} style={{ backgroundColor: "violet" }} />
                            </Box>
                            <Box bg={"white"} borderRadius={"md"} p={3}>
                                <VscAzureDevops size={25} style={{ backgroundColor: "white" }} />
                            </Box>
                            <Box bg={"blue"} borderRadius={"md"} p={3}>
                                <SiJira size={25} style={{ backgroundColor: "blue" }} />
                            </Box>
                            <Box bg={"purple"} borderRadius={"md"} p={3}>
                                <BiLogoMicrosoftTeams size={25} style={{ backgroundColor: "purple" }} />
                            </Box>
                        </HStack>
                        <Text>Visual Studio Code, GitHub, Azure DevOps, Jira, Microsoft Teams  </Text>
                    </Box>
                </Box>
            </Box>
        </>
    )
}