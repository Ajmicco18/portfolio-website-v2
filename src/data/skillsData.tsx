import {
    FaPython,
    FaJs,
    FaCss3Alt,
    FaHtml5,
    FaReact,
    FaGithub,
} from "react-icons/fa";

import {
    SiMysql,
    SiSqlite,
    SiJupyter,
    SiDjango,
    SiFastapi,
    SiVite,
    SiNextdotjs,
    SiJira,
    SiDocker,
    SiPytorch,
    SiPandas,
    SiNumpy,
    SiScikitlearn,
    SiDatabricks,
    SiTypescript,
    SiMongodb
} from "react-icons/si";

import {
    BiLogoVisualStudio
} from "react-icons/bi";

import { VscAzureDevops, VscAzure } from "react-icons/vsc";

export const frontendIcons = (size: number, color: string) => [

    {
        icon: <FaJs size={size} color={color} />,
        name: "JavaScript",
        backgroundColor: "#F0DB4F",
    },
    {
        icon: <SiTypescript size={size} color={color} />,
        name: "TypeScript",
        backgroundColor: "#3178C6",
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
    }
];

export const backendIcons = (size: number, color: string) => [
    {
        icon: <FaPython size={size} color={color} />,
        name: "Python",
        backgroundColor: "#3776AB",
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
    {
        icon: <SiMongodb size={size} color={color} />,
        name: "MongoDB",
        backgroundColor: "#00ED64",
    },
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
];

export const dataScienceIcons = (size: number, color: string) => [
    {
        icon: <SiPandas size={size} color={color} />,
        name: "Pandas",
        backgroundColor: "#150458",
    },
    {
        icon: <SiPytorch size={size} color={color} />,
        name: "PyTorch",
        backgroundColor: "#EE4C2C",
    },
    {
        icon: <SiScikitlearn size={size} color={color} />,
        name: "Scikit Learn",
        backgroundColor: "#29ABE2",
    },
    {
        icon: <SiNumpy size={size} color={color} />,
        name: "NumPy",
        backgroundColor: "#4D77CF",
    },

    {
        icon: <SiJupyter size={size} color={color} />,
        name: "Jupyter Lab",
        backgroundColor: "#F37626",
    },
    {
        icon: <SiDatabricks size={size} color={color} />,
        name: "Databricks",
        backgroundColor: "#FF3621",
    }
];

export const devOpsIcons = (size: number, color: string) => [
    {
        icon: <VscAzure size={size} color={color} />,
        name: "Azure Cloud",
        backgroundColor: "#0078D4",
    },
    {
        icon: <SiDocker size={size} color={color} />,
        name: "Docker",
        backgroundColor: "#1D63ED",
    },
    {
        icon: <FaGithub size={size} color={color} />,
        name: "GitHub",
        backgroundColor: "#6E40C9",
    },
    {
        icon: <VscAzureDevops size={size} color={color} />,
        name: "Azure DevOps",
        backgroundColor: "#00AEEF",
    },
    {
        icon: <SiJira size={size} color={color} />,
        name: "Jira",
        backgroundColor: "#96999E",
    },
    {
        icon: <BiLogoVisualStudio size={size} color={color} />,
        name: "Visual Studio Code",
        backgroundColor: "#0098FF",
    },
];