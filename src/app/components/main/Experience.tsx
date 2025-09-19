"use client"
import { Avatar, Box, Heading, Text, Timeline } from "@chakra-ui/react"
import { experience } from "@/data/experienceData"

export const Experience = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize={{ base: "32px", md: "48px" }} mb={8} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>Experience</Heading>
                {experience().map((expObj, index) => (
                    <Timeline.Root size={"xl"} key={index} maxW="100%">
                        <Timeline.Item key={index} mt={8}>
                            <Timeline.Connector mr={8} color={"black"}>
                                <Timeline.Separator />
                                <Timeline.Indicator >
                                    <Avatar.Root size="2xl" mt={6}>
                                        <Avatar.Image src={expObj.image} />
                                        <Avatar.Fallback name={expObj.company} />
                                    </Avatar.Root>
                                </Timeline.Indicator>
                            </Timeline.Connector>
                            <Timeline.Content padding={4} bg={"#2D42B9"} borderRadius={3}>
                                <Timeline.Title fontWeight={"bold"} fontSize={{ base: "16px", md: "20px" }} color={"white"}>{expObj.title}</Timeline.Title>
                                <Timeline.Description fontWeight={"bold"} color={"lightgray"} fontSize={{ base: "12px", md: "16px" }}>{expObj.company}</Timeline.Description>
                                <Text textStyle="md" color={"white"} >
                                    {expObj.description}
                                </Text>
                                <Timeline.Description color={"lightgray"} fontSize={{ base: "12px", md: "16px" }}>{expObj.duration}</Timeline.Description>
                            </Timeline.Content>
                        </Timeline.Item>
                    </Timeline.Root>
                ))}
            </Box>
        </>
    )
}