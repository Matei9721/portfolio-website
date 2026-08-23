const text = (value) => ({text: value});
const link = (value, href) => ({text: value, href});

export const workExperience = [
    {
        id: 'elsevier',
        company: 'Elsevier',
        period: '2023 — now',
        role: 'Senior Data Scientist',
        progression: [
            {role: 'Senior Data Scientist', period: '2025 — now'},
            {role: 'Data Scientist III', period: '2024 — 2025'},
            {role: 'Data Scientist II', period: '2023 — 2024'},
            {role: 'Data Science Intern', period: '2023'},
        ],
        highlights: [
            {
                id: 'multi-agent-research',
                segments: [text('Led the design and delivery of a cross-portfolio deep-research assistant that uses planning, reasoning, and research agents across multiple Elsevier solutions to accelerate scientific discovery with generative AI.')],
            },
            {
                id: 'embase-ai',
                segments: [
                    text('Helped shape and build'),
                    link(' EmbaseAI', 'https://www.elsevier.com/products/embase/embase-ai'),
                    text(', a natural-language search assistant that simplified complex queries, increased user engagement, and supported a 20% uplift in reselling.'),
                ],
            },
            {
                id: 'rag-chat-products',
                segments: [
                    text('Implemented RAG enhancements with in-house fine-tuned models and launched conversational interfaces for'),
                    link(' ReaxysAI', 'https://www.elsevier.com/about/press-releases/elsevier-introduces-reaxys-ai-search-enabling-faster-and-more-accessible'),
                    text(' and'),
                    link(' PharmapendiumAI', 'https://www.elsevier.com/products/pharmapendium/pharmapendium-ai'),
                    text(', improving the search experience and boosting user retention by more than 30%.'),
                ],
            },
            {
                id: 'information-extraction',
                segments: [
                    text('Planned and developed production information-extraction pipelines using rule-based and transformer/BERT models on AWS. Integrated into'),
                    link(' Embiology', 'https://www.elsevier.com/products/embiology'),
                    text(', the pipeline improved precision by about 40% over the previous solution and processes millions of documents annually.'),
                ],
            },
        ],
        technologies: [
            'Python',
            'Transformers / BERT',
            'LLMs · SFT / DPO fine-tuning',
            'RAG',
            'Prompt engineering / guardrails',
            'Offline & online evaluation',
            'AWS · S3 / Lambda / SageMaker',
            'Vector DBs · OpenSearch',
            'Docker',
            'CI/CD',
        ],
    },
    {
        id: 'syntho',
        company: 'Syntho',
        period: '2021 — 2022',
        role: 'Python Software Engineer Intern',
        highlights: [
            {
                id: 'pii-scanners',
                segments: [text('Improved PII and relationship scanners used to generate synthetic data.')],
            },
            {
                id: 'database-subsetting',
                segments: [text('Implemented a distributed database-subsetting algorithm for smaller development datasets.')],
            },
            {
                id: 'visualization-dashboard',
                segments: [text('Built a D3 dashboard and maintained Python services for inspecting synthetic-data quality and supporting generation workflows.')],
            },
            {
                id: 'testing-and-devops',
                segments: [text('Improved engineering reliability through unit and integration testing, CI/CD workflows, Docker environments, and bug investigation across application and deployment workflows.')],
            },
        ],
        technologies: [
            'Python',
            'Unit & integration testing',
            'Docker',
            'CI/CD',
            'D3.js',
        ],
    },
];
