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
                id: 'reaxys-chemistry-assistant',
                title: 'Reaxys chemistry assistant',
                href: 'https://www.elsevier.com/about/press-releases/elsevier-introduces-reaxys-ai-search-enabling-faster-and-more-accessible',
                segments: [
                    text('Combined technical leadership with hands-on development. Led five data scientists over nine months to deliver natural-language reaction search and AI insights, translating text and molecular inputs into structured chemistry queries. Led dataset development, fine-tuning, orchestration, and evaluation with chemistry experts, and coordinated business stakeholders. Delivered the API to production, supporting up to 100 concurrent users and achieving a 90% helpfulness score from users.'),
                ],
            },
            {
                id: 'multi-agent-research',
                title: 'Multi-agent research assistant',
                segments: [text('Led the design and delivery of a cross-portfolio deep-research assistant that uses planning, reasoning, and research agents across multiple Elsevier solutions to accelerate scientific discovery with generative AI.')],
            },
            {
                id: 'embase-ai',
                title: 'EmbaseAI',
                href: 'https://www.elsevier.com/products/embase/embase-ai',
                segments: [
                    text('Helped shape and build a natural-language search assistant that simplified complex queries, increased user engagement, and supported a 20% uplift in reselling.'),
                ],
            },
            {
                id: 'pharmapendium-ai',
                title: 'PharmapendiumAI',
                href: 'https://www.elsevier.com/products/pharmapendium/pharmapendium-ai',
                segments: [
                    text('Implemented RAG enhancements with in-house fine-tuned models and launched conversational interfaces, improving the search experience and boosting user retention by more than 30%.'),
                ],
            },
            {
                id: 'information-extraction',
                title: 'Information extraction at scale',
                segments: [
                    text('Planned, developed, and deployed production information-extraction pipelines using rule-based and transformer/BERT models on AWS. Integrated into'),
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
            'FastAPI · async scaling / load testing / observability',
        ],
    },
];
