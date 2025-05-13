"use client"
import { Box, Link, Text, Stack } from "@chakra-ui/react";
import { FaCodeBranch } from "react-icons/fa6";

export default function Footer() {
    const currentDate: Date = new Date();
    const year: number = currentDate.getFullYear()
    return (
        <Box>
            <Stack direction={"row"}>
                <Text>
                    &copy; Anthony Micco {year}
                </Text>
                <Link _hover={{ color: "#36454F" }} href="https://github.com/Ajmicco18/portfolio-website-v2">
                    <FaCodeBranch />
                </Link>
            </Stack>
        </Box>
    )
}