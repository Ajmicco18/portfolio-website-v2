"use client"
import { Box, Link, Text, Stack } from "@chakra-ui/react";
import { FaCodeBranch } from "react-icons/fa6";

export default function Footer() {
    const currentDate: Date = new Date();
    const year: number = currentDate.getFullYear()
    return (
        <Box margin={"auto"}>
            <Stack direction={"row"} >
                <Text textAlign={"center"}>
                    &copy; {year} Anthony Micco
                </Text>
                <Link _hover={{ color: "#2D42B9" }} href="https://github.com/Ajmicco18/portfolio-website-v2">
                    <FaCodeBranch />
                </Link>
            </Stack>
        </Box>
    )
}