import portfolioPreview from '../resources/website.PNG';

export const personalProjects = [
    {
        id: 'genai-chatbot-assistant',
        title: 'A chatbot that can surf the web',
        description: 'An agent-driven RAG experiment using LangGraph and open-source web search to answer questions with live information.',
        tags: ['LangGraph', 'RAG', 'Web search'],
        image: {
            src: 'https://i.ibb.co/Bc4ScZY/DALL-E-2024-09-15-21-30-34-A-super-simplistic-and-cute-design-for-a-Gen-AI-application-thumbnail-Sho.webp',
            alt: 'A small friendly robot floating among clouds',
            className: 'project-card__image--standard',
        },
        githubUrl: 'https://github.com/Matei9721/ai-search-engine',
        githubLabel: 'View the chatbot source',
    },
    {
        id: 'project-idlab',
        title: 'Powerful Personal Data',
        description: 'A month-long hackathon collaboration with IDLab and imec: a linked-data weather app built around Solid pods and personal data ownership.',
        tags: ['Linked data', 'Solid pods', 'Hackathon'],
        image: {
            src: 'https://raw.githubusercontent.com/osoc22/project-idlab/049fd122bdbf4d9426c90bcb5d1dc244c5c5f8f1/docs/assets/powerful-personal-data-crest.svg',
            alt: 'Powerful Personal Data project crest',
            className: 'project-card__image--standard',
        },
        githubUrl: 'https://github.com/osoc22/project-idlab',
        githubLabel: 'View the IDLab source',
    },
    {
        id: 'portfolio-website',
        title: 'This website, naturally',
        description: 'The place where I experiment with React, interaction design and the visual ideas I refuse to leave alone.',
        tags: ['React', 'Vite', 'Creative coding'],
        image: {
            src: portfolioPreview,
            alt: 'An earlier version of this portfolio website',
            className: 'project-card__image--portfolio',
        },
        githubUrl: 'https://github.com/Matei9721/portofolio-website',
        githubLabel: 'View this portfolio source',
    },
    {
        id: 'discord-javascript-bot',
        title: 'The Discord music bot',
        description: 'A Discord music bot built with my best friend, complete with queues, livestreams and keyword search.',
        tags: ['JavaScript', 'Discord API', 'Music'],
        image: {
            src: 'https://github-production-user-asset-6210df.s3.amazonaws.com/60573633/275339002-7f07be17-1655-4d2e-ae96-d1d21b099235.PNG',
            alt: 'The Discord music bot playing a track in chat',
            className: 'project-card__image--discord',
        },
        githubUrl: 'https://github.com/Matei9721/js-discord-bot',
        githubLabel: 'View the Discord bot source',
    },
];
