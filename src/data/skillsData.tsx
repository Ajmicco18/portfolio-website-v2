import {
    FaPython,
    FaJs,
    FaCss3Alt,
    FaHtml5,
    FaJava,
    FaReact,
    FaGithub
} from "react-icons/fa";

import {
    SiMysql,
    SiSqlite,
    SiTableau,
    SiCplusplus,
    SiJupyter,
    SiDjango,
    SiFastapi,
    SiVite,
    SiNextdotjs,
    SiJira,
    SiR
} from "react-icons/si";

import {
    BiLogoVisualStudio,
    BiLogoMicrosoftTeams
} from "react-icons/bi";

import { VscAzureDevops } from "react-icons/vsc";

export const languageIcons = (size: number, color: string) => [
    {
        icon: <SiCplusplus size={size} color={color} />,
        name: "C++",
        backgroundColor: "#3178C6",
    },
    {
        icon: <FaJava size={size} color={color} />,
        name: "Java",
        backgroundColor: "#007396",
    },
    {
        icon: <FaPython size={size} color={color} />,
        name: "Python",
        backgroundColor: "#3776AB",
    },
    {
        icon: <FaJs size={size} color={color} />,
        name: "JavaScript",
        backgroundColor: "#F0DB4F",
    },
    {
        icon: <FaHtml5 size={size} color={color} />,
        name: "HTML5",
        backgroundColor: "#E34F26",
    },
    {
        icon: <FaCss3Alt size={size} color={color} />,
        name: "CSS3",
        backgroundColor: "#1572B6",
    },
];

export const softwareIcons = (size: number, color: string) => [
    {
        icon: <FaReact size={size} color={color} />,
        name: "React",
        backgroundColor: "#61DBFB",
    },
    {
        icon: <SiNextdotjs size={size} color={color} />,
        name: "Next.js",
        backgroundColor: "#111111",
    },
    {
        icon: <SiVite size={size} color={color} />,
        name: "Vite",
        backgroundColor: "#41D1FF",
    },
    {
        icon: <SiDjango size={size} color={color} />,
        name: "Django",
        backgroundColor: "#0C4B33",
    },
    {
        icon: <SiFastapi size={size} color={color} />,
        name: "FastAPI",
        backgroundColor: "#00ccb8",
    },
];

export const dataScienceIcons = (size: number, color: string) => [
    {
        icon: <SiMysql size={size} color={color} />,
        name: "MySQL",
        backgroundColor: "#2B5D80",
    },
    {
        icon: <SiSqlite size={size} color={color} />,
        name: "SQLite",
        backgroundColor: "#0F80CC",
    },
    {
        icon: <SiR size={size} color={color} />,
        name: "R",
        backgroundColor: "#BFC2C5",
    },
    {
        icon: <SiTableau size={size} color={color} />,
        name: "Tableau",
        backgroundColor: "#032D60",
    },
    {
        icon: <SiJupyter size={size} color={color} />,
        name: "Jupyter Lab",
        backgroundColor: "#F37626",
    },
];

export const devOpsIcons = (size: number, color: string) => [
    {
        icon: <BiLogoVisualStudio size={size} color={color} />,
        name: "Visual Studio Code",
        backgroundColor: "#0098FF",
    },
    {
        icon: <FaGithub size={size} color={color} />,
        name: "GitHub",
        backgroundColor: "#6E40C9",
    },
    {
        icon: <VscAzureDevops size={size} color={color} />,
        name: "Azure DevOps",
        backgroundColor: "#D83B16",
    },
    {
        icon: <SiJira size={size} color={color} />,
        name: "Jira",
        backgroundColor: "#96999E",
    },
    {
        icon: <BiLogoMicrosoftTeams size={size} color={color} />,
        name: "Microsoft Teams",
        backgroundColor: "#505AC9",
    },
];