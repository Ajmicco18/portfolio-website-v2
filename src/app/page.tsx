import Footer from "./components/Footer";
import Header from "./components/Header";
import { Landing } from "./components/main/Landing";
import { AboutMe } from "./components/main/AboutMe";
import { Skills } from "./components/main/Skills";
import { Experience } from "./components/main/Experience";
import { Container, Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container display={"flex"} flexDirection={"column"} margin={"auto"} width={"100%"}>
      <Header />
      <Box width={"100%"}>
        <Landing />
      </Box>
      <Box width={"100%"}>
        <AboutMe />
      </Box>
      <Box width={"100%"}>
        <Skills />
      </Box>
      <Box width={"100%"}>
        <Experience />
      </Box>
      <Footer />
    </Container>
  );
}
