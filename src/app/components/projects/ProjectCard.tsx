"use client"
import { Box, Link, Text } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"
import { OtherProject } from "@/data/projectData";

interface OtherProjectProps {
    project: OtherProject;
}

export const ProjectCard = ({ project }: OtherProjectProps) => {

    return (
        <>
            <Box borderRadius="10px" backgroundColor={"#2D42B9"} mt={2} width={"100%"} padding={2}>
                <Text fontSize={{ base: "15px", md: "20px" }} fontWeight={"bold"} color={"white"}>
                    {project.title}
                </Text>
                <Text fontSize={{ base: "12px", md: "15px" }} color={"lightgray"}>
                    {project.description}
                </Text>
                <Link href={project.url} target="_blank">
                    <Box
                        bg={"white"}
                        p={2}
                        mt={2}
                        borderRadius={"md"}
                        _hover={{ bg: "lightgray" }}
                    >
                        <FaGithub size={28} color="#501DAF" />
                    </Box>
                </Link>
            </Box>
        </>
    )
}