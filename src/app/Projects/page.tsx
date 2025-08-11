import Footer from "../components/Footer";
import Header from "../components/Header";
import { Container } from "@chakra-ui/react";

export default function Projects() {
    return (
        <>
            <Container display={"flex"} flexDirection={"column"} margin={"auto"} width={"100%"}>
                <Header />
                <main >
                    <div >
                        <h1>This is going to be the projects page</h1>
                    </div>
                </main>
                <Footer />
            </Container>

        </>
    )
}