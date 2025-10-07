export type OtherProject = {
    title: string;
    description: string;
    url: string;
};

export const projects = (): OtherProject[] => [
    {
        title: "Baseball Queries with RAG",
        description: "My capstone project utilizing Retrieval Augmented Generation (RAG) to answer baseball related queries.",
        url: "https://github.com/Ajmicco18/baseball-queries-with-rag"
    },
    {
        title: "Sports Memorabilia Store",
        description: "A full stack e-commerce web application developed as a final project for my E-Commerce Programming course.",
        url: "https://github.com/Ajmicco18/Sports-Memorbilia-Store"
    },
    {
        title: "Portfolio Website V1",
        description: "The first version of my personal portfolio website built using React and Material UI.",
        url: "https://github.com/Ajmicco18/personalWebsite"
    },
    {
        title: "Mount Olympus Website",
        description: "A final project for my Web Development course that showcases information about Mount Olympus.",
        url: "https://github.com/Ajmicco18/Mt-Olympus-Website"
    },
    {
        title: "The Great Thessaloniki Fire of 1917",
        description: "A final project for my Thessaloniki History course that details the events of the Great Fire of 1917 in Thessaloniki, Greece.",
        url: "https://github.com/Ajmicco18/Thessaloniki-History-Website"
    },

]