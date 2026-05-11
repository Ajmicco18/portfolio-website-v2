"use client"
import {
    Box,
    Flex,
    Text,
    ButtonGroup,
    Heading,
    Link
} from "@chakra-ui/react";


export default function Header() {
    return (
        <>
            <Box
                as="nav"
                w="100%"
                position={"sticky"}
                top={0}
                zIndex={1000}
                bg="rgba(50, 51, 51, 0.85)"
                backdropFilter="blur(10px)"
                borderBottom="1px solid rgba(255, 255, 255, 0.1)"
            >
                <Flex
                    alignItems="center"
                    flexDirection="row"
                    w={"100%"}
                    margin={"auto"}
                    justifyContent={"space-between"}
                    px={{ "base": 4, "md": 8 }}
                    py={4}
                >
                    <Box>
                        <Heading size="lg">
                            <Link href={"/"}>
                                <Box>
                                    <Text color={"white"} fontSize={"x-large"} _hover={{ textDecoration: "underline", textDecorationColor: "#C80815" }}>Anthony Micco</Text>
                                </Box>
                            </Link>
                        </Heading>
                    </Box>

                    <ButtonGroup gap={6}>
                        <Heading size={"md"}>
                            <Link href={"/Projects"}>
                                <Box>
                                    <Text color={"white"} _hover={{ textDecoration: "underline", textDecorationColor: "#C80815" }}>/Projects</Text>
                                </Box>
                            </Link>
                        </Heading>
                        <Heading size={"md"}>
                            <Link href={"anthony_micco_resume.pdf"} target="__blank">
                                <Box>
                                    <Text color={"white"} _hover={{ textDecoration: "underline", textDecorationColor: "#C80815" }}>/Resume</Text>
                                </Box>
                            </Link>
                        </Heading>
                    </ButtonGroup>
                </Flex>
            </Box>
        </>
    )
}