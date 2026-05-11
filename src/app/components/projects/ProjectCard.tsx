"use client"
import { Box, Link, Text, Heading } from "@chakra-ui/react"
import { FaGithub } from "react-icons/fa"
import { OtherProject } from "@/data/projectData";

interface OtherProjectProps {
    project: OtherProject;
}

export const ProjectCard = ({ project }: OtherProjectProps) => {

    return (
        <>
            <Box borderRadius={5} backgroundColor={"#C80815"} mt={2} width={"100%"} padding={2}>
                <Heading fontSize={{ base: "15px", md: "20px" }} fontWeight={"bold"} color={"black"}>
                    {project.title}
                </Heading>
                <Text fontSize={{ base: "12px", md: "15px" }} color={"lightgray"}>
                    {project.description}
                </Text>
                <Link href={project.url} target="_blank">
                    <Box
                        bg={"black"}
                        p={2}
                        mt={2}
                        borderRadius={"md"}
                        _hover={{ bg: "lightgray" }}
                    >
                        <FaGithub size={28} color="white" />
                    </Box>
                </Link>
            </Box>
        </>
    )
}