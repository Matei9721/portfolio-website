export const personalProjects = [
    {
        id: 'genai-chatbot-assistant',
        title: 'GenAI ChatBot Assistant that can surf the web',
        description: 'This project is a Generative AI (GenAI) application that leverages LangGraph\n' +
            'to build an agent-driven Retrieval-Augmented Generation (RAG) system. The application\n' +
            'integrates an open-source web search engine to search for real-time information to\n' +
            'answer user queries.',
        image: {
            src: 'https://i.ibb.co/Bc4ScZY/DALL-E-2024-09-15-21-30-34-A-super-simplistic-and-cute-design-for-a-Gen-AI-application-thumbnail-Sho.webp',
            alt: 'example',
            className: 'project-card__image--standard',
        },
        githubUrl: 'https://github.com/Matei9721/ai-search-engine',
        githubLabel: 'View GenAI ChatBot Assistant on GitHub',
    },
    {
        id: 'project-idlab',
        title: 'Project IDLab - Powerful Personal Data',
        description: 'As part of a month-long Hackaton in Belgium, I have partnered up with IDLab\n' +
            'and Imec to showcase how taking back control of your personal data can be achieved using\n' +
            'linked data and Solid pods. Our final product was a linked-data connected weather app.',
        image: {
            src: 'https://raw.githubusercontent.com/osoc22/project-idlab/049fd122bdbf4d9426c90bcb5d1dc244c5c5f8f1/docs/assets/powerful-personal-data-crest.svg',
            alt: 'ID Lab Logo',
            className: 'project-card__image--standard',
        },
        githubUrl: 'https://github.com/osoc22/project-idlab',
        githubLabel: 'View Project IDLab on GitHub',
    },
    {
        id: 'portfolio-website',
        title: "This website you're currently on",
        description: "To brush up my JavaScript skills, I built this personal website using the\n" +
            "dynamic duo of React and Ant Design. I 'borrowed' ideas from the internet and gave them\n" +
            'my own quirky twist. Check out the code antics on GitHub!',
        image: {
            src: 'https://raw.githubusercontent.com/Matei9721/portofolio-website/main/src/resources/website.PNG',
            alt: 'example',
            className: 'project-card__image--portfolio',
        },
        githubUrl: 'https://github.com/Matei9721/portofolio-website',
        githubLabel: 'View this portfolio on GitHub',
    },
    {
        id: 'discord-javascript-bot',
        title: 'Discord Javascript bot',
        description: "A JavaScript bot using the official Discord API which can play music\n" +
            "using Youtube's API. Supports queues, livestreams and keyword search. Developed with\n" +
            'my best friend so we can finally argue about code we both contribute to.',
        image: {
            src: 'https://github-production-user-asset-6210df.s3.amazonaws.com/60573633/275339002-7f07be17-1655-4d2e-ae96-d1d21b099235.PNG',
            alt: 'Discord Bot',
            className: 'project-card__image--discord',
        },
        githubUrl: 'https://github.com/Matei9721/js-discord-bot',
        githubLabel: 'View Discord Javascript bot on GitHub',
        hoverable: true,
    },
];
