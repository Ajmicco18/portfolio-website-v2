import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "@/data/projectData";
import { Box, Container, Heading, Stack, SimpleGrid } from "@chakra-ui/react";

export default function Projects() {
    return (
        <>
            <Container display={"flex"} flexDirection={"column"} margin={"auto"} width={"100%"}>
                <Header />
                <Box width={"100%"}>
                    <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                        <Heading size={"xl"} fontSize={{ base: "32px", md: "48px" }} textAlign={"center"} mb={8} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>Featured Project</Heading>

                        <Heading size={"xl"} fontSize={{ base: "32px", md: "48px" }} textAlign={"center"} mb={8} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>Other Projects</Heading>
                        <SimpleGrid
                            columns={{ base: 1, md: 2 }}
                            gap={2}
                            mt={5}
                        >
                            {projects().map((project, index) => (
                                <ProjectCard project={project} key={index} />
                            ))}
                        </SimpleGrid>
                    </Box>
                </Box>
                <Footer />
            </Container>

        </>
    )
}