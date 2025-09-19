"use client";
import { Box, HStack, Link } from "@chakra-ui/react"
import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { Tooltip } from "@/app/components/tooltip";

const icons = (size: number) => [
    {
        icon: <FaGithub size={size} color={"white"} />,
        name: "GitHub",
        url: "https://github.com/Ajmicco18",
        backgroundColor: "#501DAF",
        color: "white"
    },
    {
        icon: <FaLinkedin size={size} color={"white"} />,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anthony-micco/",
        backgroundColor: "#0a66c2",
        color: "white"
    },
    {
        icon: <MdOutlineMailOutline size={size} color={"black"} />,
        name: "Anthony Micco",
        url: "mailto:anthonymicco2003@gmail.com",
        backgroundColor: "white",
        color: "black"
    }
]

export const SocialsIcons = () => {
    return (
        <>
            <HStack gap={6} my={4}>
                {icons(36).map((icon, index) => (
                    <Link key={index} href={icon.url} target="_blank">
                        <Tooltip
                            content={icon.name}
                            contentProps={{ css: { "--tooltip-bg": icon.backgroundColor, "color": icon.color } }}
                        >
                            <Box
                                bg={icon.backgroundColor}
                                p={2}
                                borderRadius={"md"}
                            >
                                {icon.icon}
                            </Box>
                        </Tooltip>
                    </Link>
                ))}
            </HStack>
        </>
    )
}