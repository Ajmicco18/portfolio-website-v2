import { createSystem, defaultConfig } from "@chakra-ui/react"
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });


export const theme = createSystem(defaultConfig, {
    theme: {
        tokens: {
            fonts: {
                body: { value: montserrat.style.fontFamily },
                heading: { value: montserrat.style.fontFamily }
            },
        },
    }
});