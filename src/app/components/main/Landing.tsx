"use client"
import { Box, Heading, HStack, Link, IconButton } from "@chakra-ui/react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const Landing = () => {
    return (
        <>
            <Box w={"80%"} margin={"auto"} padding={8}>
                <Heading size={"3xl"} fontSize="48px" color={"white"} padding={3}>Anthony Micco</Heading>
                <Heading size={"xl"} fontSize={"36px"} padding={3}>Software Developer</Heading>
                <HStack gap={4} padding={3}>
                    <Link href={"https://github.com/Ajmicco18"} target="_blank" >
                        <IconButton bg={"#501DAF"} size={"xl"} _hover={{ transform: "scale(1.1)", transition: "0.2s" }} >
                            <FaGithub fontSize={68} />
                        </IconButton>
                    </Link>
                    <Link href={"https://www.linkedin.com/in/anthony-micco/"} target="_blank">
                        <IconButton bg={"#0a66c2"} size={"xl"} _hover={{ transform: "scale(1.1)", transition: "0.2s" }}>
                            <FaLinkedin />
                        </IconButton>
                    </Link>
                    <Link href={"mailto:anthonymicco2003@gmail.com"} target="_blank">
                        <IconButton bg={"white"} size={"xl"} _hover={{ transform: "scale(1.1)", transition: "0.2s" }}>
                            <MdOutlineMailOutline color="black" />
                        </IconButton>
                    </Link>
                </HStack>
            </Box>
        </>
    )
}
