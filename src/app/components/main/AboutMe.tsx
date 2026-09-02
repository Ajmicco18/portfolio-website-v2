"use client"
import { Box, Heading, Text } from "@chakra-ui/react"

export const AboutMe = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "85%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize={{ base: "32px", md: "48px" }} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#C80815"}>About Me</Heading>
                <Text as={"p"} padding={3} color={"white"} fontWeight={"bold"}>
                    I am Anthony Micco, and I graduated from Youngstown State University with a Bachelor of Science in Computer Science in December 2025.
                    I am furthering my education by pursuing a Master of Science in Data Science & Statistics. With a passion for sports, programming, and problem-solving,
                    I aim to merge these interests through a career as a data scientist or web developer.
                </Text>
                <Text as={"p"} padding={3} color={"white"} fontWeight={"bold"}>
                    Currently, I serve as a Data Science Intern at PANTHERx Rare, where I am enhancing an existing AI pipeline by developing a Patient Lookup feature.
                    This feature leverages an EDW instance in Databricks to determine whether a patient exists based on data extracted by an LLM from fax documents.
                    Alongside my internship, I am actively exploring full-time opportunities ahead of my expected graduation in December 2026.
                    My determination, perseverance, and organizational skills give me full confidence that I will earn my Master's degree and secure a meaningful role in the data science or software engineerin fields.
                </Text>

            </Box>
        </>
    )
}