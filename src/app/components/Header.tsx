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
            >
                <Flex
                    minWidth="max-content"
                    alignItems="center"
                    flexDirection="row"
                    justifyContent={"space-around"}
                    py={8}
                >
                    <Box>
                        <Heading size="lg">
                            <Link href={"/"}>
                                <Box>
                                    <Text color={"white"} fontSize={"x-large"} _hover={{ textDecoration: "underline", textDecorationColor: "#2D42B9" }}>Anthony Micco</Text>
                                </Box>
                            </Link>
                        </Heading>
                    </Box>

                    <ButtonGroup gap={2}>
                        <Link href={"/Projects"}>
                            <Box>
                                <Text color={"white"} _hover={{ textDecoration: "underline", textDecorationColor: "#2D42B9" }}>/Projects</Text>
                            </Box>
                        </Link>
                        <Link href={"anthony_micco_resume.pdf"} target="__blank">
                            <Box>
                                <Text color={"white"} _hover={{ textDecoration: "underline", textDecorationColor: "#2D42B9" }}>/Resume</Text>
                            </Box>
                        </Link>
                    </ButtonGroup>
                </Flex>
            </Box>
        </>
    )
}