"use client"
import { Avatar, Box, Heading, Text, Timeline, Link, TimelineSeparator } from "@chakra-ui/react"
import { experience } from "@/data/experienceData"

export const Experience = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize={{ base: "32px", md: "48px" }} mb={8} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>Experience</Heading>
                <Timeline.Root size={"xl"} maxW="100%">
                    {experience().map((expObj, index) => (
                        <Timeline.Item key={index} mt={4}>
                            <Timeline.Connector mr={4} color={"black"}>
                                <TimelineSeparator />
                                <Timeline.Indicator >
                                    <Avatar.Root size="2xl">
                                        <Avatar.Image src={expObj.image} />
                                        <Avatar.Fallback name={expObj.company} />
                                    </Avatar.Root>
                                </Timeline.Indicator>
                            </Timeline.Connector>
                            <Timeline.Content padding={4} mb={4} bg={"#2D42B9"} borderRadius={3}>
                                <Timeline.Title fontWeight={"bold"} fontSize={{ base: "16px", md: "20px" }} color={"white"}>{expObj.title}</Timeline.Title>
                                <Link href={expObj.url} fontWeight={"bold"} color={"lightgray"} fontSize={{ base: "12px", md: "16px" }} _hover={{ color: "white", textDecoration: "none" }} >
                                    {expObj.company}
                                </Link>
                                {expObj.description.map((desc, index) => (
                                    <Text key={index} textStyle="md" color={"white"} >
                                        {desc}
                                    </Text>
                                ))}
                                <Timeline.Description color={"lightgray"} fontSize={{ base: "12px", md: "16px" }}>{expObj.duration}</Timeline.Description>
                            </Timeline.Content>
                        </Timeline.Item>
                    ))}
                </Timeline.Root>
            </Box>
        </>
    )
}