"use client"
import { Box, Heading, Text, HStack, Link, IconButton } from "@chakra-ui/react"

export const AboutMe = () => {
    return (
        <>
            <Box w={"80%"} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize="48px" color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"blue"}>About Me</Heading>
                <Text as={"p"} padding={3}>I am Anthony Micco, I am an undergraduate Computer Science student at Youngstown State University. I am going into my
                    final semester of school and will graduate with my Bachelor's Degree in December 2025. After graduation, I intend to continue my education at
                    Youngstown State and pursue my Data Science Masters. I fell in love with programming and problem solving during my Sophomore year of high school
                    while taking an AP Computer Science course and from there decided to pursue a career in the field, ideally wanting to specialize in web development,
                    machine learning, and data visualization.
                </Text>

            </Box>
        </>
    )
}