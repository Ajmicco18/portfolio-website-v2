"use client"
import { Box, Heading, Text, HStack } from "@chakra-ui/react"
import { languageIcons, softwareIcons, dataScienceIcons, devOpsIcons } from "@/data/skillsData";

export const Skills = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize={{ base: "32px", md: "48px" }} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>Skills</Heading>
                <Box display={"flex"} margin={"auto"} flexDirection={{ base: "column", md: "row" }} w={"100%"} flexWrap={"wrap"} textAlign={"center"} justifyContent={"center"} alignItems={"center"}>
                    <Box width={{ base: "100%", md: "45%" }} p={2} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "24px", md: "32px" }} fontWeight={"bold"} color={"white"} >Languages</Text>
                        <HStack flexWrap={"wrap"} justifyContent={"center"}>
                            {languageIcons(30, "white").map((iconObj, index) => (

                                <Box
                                    key={index}
                                    p={3}
                                    bg={iconObj.backgroundColor}
                                    borderRadius={"md"}
                                >
                                    {iconObj.icon}
                                </Box>

                            ))}
                            {/*<Tooltip
                            key={index}
                            label={iconObj.name}
                            borderRadius={"lg"}
                            bg={iconObj.backgroundColor}
                            >
                            </Tooltip>*/}
                        </HStack>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} p={2} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "24px", md: "32px" }} fontWeight={"bold"} color={"white"} >Software Development</Text>
                        <HStack flexWrap={"wrap"} justifyContent={"center"}>
                            {softwareIcons(30, "white").map((iconObj, index) => (

                                <Box
                                    key={index}
                                    p={3}
                                    bg={iconObj.backgroundColor}
                                    borderRadius={"md"}
                                >
                                    {iconObj.icon}
                                </Box>

                            ))}
                            {/*<Tooltip
                            key={index}
                            label={iconObj.name}
                            borderRadius={"lg"}
                            bg={iconObj.backgroundColor}
                            >
                            </Tooltip>*/}
                        </HStack>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} p={2} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "24px", md: "32px" }} fontWeight={"bold"} color={"white"} >Data Science</Text>
                        <HStack flexWrap={"wrap"} justifyContent={"center"}>
                            {dataScienceIcons(30, "white").map((iconObj, index) => (
                                <Box
                                    key={index}
                                    p={3}
                                    bg={iconObj.backgroundColor}
                                    borderRadius={"md"}
                                >
                                    {iconObj.icon}
                                </Box>

                            ))}
                            {/*<Tooltip
                            key={index}
                            label={iconObj.name}
                            borderRadius={"lg"}
                            bg={iconObj.backgroundColor}
                            >
                            </Tooltip>*/}
                        </HStack>
                    </Box>
                    <Box width={{ base: "100%", md: "45%" }} p={2} margin={"auto"}>
                        <Text as={"h3"} fontSize={{ base: "24px", md: "32px" }} fontWeight={"bold"} color={"white"} >Version Control/DevOps</Text>
                        <HStack flexWrap={"wrap"} justifyContent={"center"}>
                            {devOpsIcons(30, "white").map((iconObj, index) => (
                                <Box
                                    key={index}
                                    p={3}
                                    bg={iconObj.backgroundColor}
                                    borderRadius={"md"}
                                >
                                    {iconObj.icon}
                                </Box>

                            ))}
                            {/*<Tooltip
                            key={index}
                            label={iconObj.name}
                            borderRadius={"lg"}
                            bg={iconObj.backgroundColor}
                            >
                            </Tooltip>*/}
                        </HStack>
                    </Box>
                </Box>
            </Box>
        </>
    )
}