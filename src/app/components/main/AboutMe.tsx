"use client"
import { Box, Heading, Text } from "@chakra-ui/react"

export const AboutMe = () => {
    return (
        <>
            <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize={{ base: "32px", md: "48px" }} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>About Me</Heading>
                <Text as={"p"} padding={3} color={"white"} fontWeight={"bold"}>I am Anthony Micco and I recently graduated from Youngstown State University with my Bachelor of Science
                    in Computer Science in December 2025. I am continuing my education by pursuing my Masters of Science in Data Science & Analytics. I fell in love with programming
                    and problem solving during my Sophomore year of high school while taking an AP Computer Science course and from there decided to pursue a career in the field,
                    ideally wanting to specialize in web development, machine learning, and data visualization.
                </Text>

            </Box>
        </>
    )
}