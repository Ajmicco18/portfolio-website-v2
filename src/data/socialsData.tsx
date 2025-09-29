"use client";
import {
    FaGithub,
    FaLinkedin
} from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

export const icons = (size: number) => [
    {
        icon: <FaGithub size={size} color={"white"} />,
        name: "GitHub",
        url: "https://github.com/Ajmicco18",
        backgroundColor: "#501DAF",
        color: "white"
    },
    {
        icon: <FaLinkedin size={size} color={"white"} />,
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/anthony-micco/",
        backgroundColor: "#0a66c2",
        color: "white"
    },
    {
        icon: <MdOutlineMailOutline size={size} color={"black"} />,
        name: "Anthony Micco",
        url: "mailto:anthonymicco2003@gmail.com",
        backgroundColor: "white",
        color: "black"
    }
]