import Footer from "../components/Footer";
import Header from "../components/Header";
import { ProjectCard } from "../components/projects/ProjectCard";
import { projects } from "@/data/projectData";
import { Box, Container, Heading, Text, SimpleGrid, Image } from "@chakra-ui/react";

export default function Projects() {
    return (
        <>
            <Container display={"flex"} flexDirection={"column"} margin={"auto"} width={"100%"}>
                <Header />
                <Box width={"100%"}>
                    <Box w={{ base: "100%", md: "80%" }} margin={"auto"} padding={8}>
                        <Heading size={"xl"} fontSize={{ base: "32px", md: "48px" }} textAlign={"center"} mb={8} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>Featured Project</Heading>
                        <Box display={"flex"} flexDirection={{ base: "column", md: "row" }} width={"100%"}>
                            <Box width={{ base: "100%", md: "45%" }} margin={"auto"} mb={8}>
                                <Image src={"images/ffi.png"}></Image>
                            </Box>
                            <Box width={{ base: "100%", md: "45%" }} bg={"red"} borderRadius={5} margin={"auto"}>
                                <Heading size={"xl"} fontSize={{ base: "20px", md: "28px" }} fontWeight={"bold"} textAlign={"center"} color={"black"} padding={2}>Fantasy Football Insights</Heading>
                                <Heading size={"md"} fontSize={{ base: "16px", md: "20px" }} textAlign={"center"} color={"black"} padding={2}>Personal Project</Heading>
                                <Text fontSize={{ base: "12px", md: "16px" }} color={"white"} textAlign={"center"} padding={2}>Fantasy Football Insights is an idea based largely on existing fantasy football apps such as ESPN Fantasy Football,
                                    Sleeper, and Yahoo! Fantasy Football, among others, along with a passion for football.
                                    The idea is to improve upon ideas from these existing applications to create the best possible fantasy football assistance
                                    software as well as help users win their leagues.
                                </Text>
                            </Box>
                        </Box>
                        <Heading size={"xl"} fontSize={{ base: "32px", md: "48px" }} textAlign={"center"} mt={16} mb={8} color={"white"} padding={3} textDecoration={"underline"} textDecorationColor={"#2D42B9"}>Other Projects</Heading>
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