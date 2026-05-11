import { createSystem, defaultConfig } from "@chakra-ui/react"
import { Fira_Code } from "next/font/google";
import { Orbitron } from "next/font/google";

const firaCode = Fira_Code({ subsets: ["latin"] });
const orbitron = Orbitron({ subsets: ["latin"] })


export const theme = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                body: { value: firaCode.style.fontFamily },
                heading: { value: orbitron.style.fontFamily }
            },
        },
    }
});