const text = (value) => ({text: value});
const link = (value, href) => ({text: value, href});

export const workExperience = [
    {
        id: 'elsevier',
        company: 'Elsevier',
        location: 'Amsterdam · Hybrid',
        dates: 'Jan 2023 — present',
        roles: [
            {
                id: 'elsevier-senior-data-scientist',
                title: 'Senior Data Scientist',
                dates: 'Mar 2025 — present',
                highlights: [
                    {
                        id: 'multi-agent-research',
                        segments: [text('Led the design and delivery of a multi-agent deep-research assistant across Elsevier solutions.')],
                    },
                    {
                        id: 'embase-ai',
                        segments: [
                            text('Helped shape and build '),
                            link('EmbaseAI', 'https://www.elsevier.com/products/embase/embase-ai'),
                            text(', a natural-language search experience that supported a 20% uplift in reselling.'),
                        ],
                    },
                    {
                        id: 'rag-products',
                        segments: [
                            text('Shipped RAG and conversational search improvements for '),
                            link('ReaxysAI', 'https://www.elsevier.com/about/press-releases/elsevier-introduces-reaxys-ai-search-enabling-faster-and-more-accessible'),
                            text(' and '),
                            link('PharmapendiumAI', 'https://www.elsevier.com/products/pharmapendium/pharmapendium-ai'),
                            text(', improving user retention by more than 30%.'),
                        ],
                    },
                    {
                        id: 'information-extraction',
                        segments: [text('Built production-scale information-extraction pipelines that process millions of documents annually and improved precision by roughly 40%.')],
                    },
                ],
            },
            {
                id: 'elsevier-data-scientist-iii',
                title: 'Data Scientist III',
                dates: 'Oct 2024 — Feb 2025',
            },
            {
                id: 'elsevier-data-scientist-ii',
                title: 'Data Scientist II',
                dates: 'Jul 2023 — Oct 2024',
            },
            {
                id: 'elsevier-data-science-intern',
                title: 'Data Science Intern',
                dates: 'Jan 2023 — Jun 2023',
            },
        ],
        skills: ['Python', 'LLMs & RAG', 'Agents', 'AWS', 'BERT', 'Evaluation'],
    },
    {
        id: 'syntho',
        company: 'Syntho',
        location: 'Amsterdam',
        dates: 'Earlier work',
        roles: [
            {
                id: 'syntho-python-engineer',
                title: 'Python Software Engineer Intern',
                dates: 'Internship',
                highlights: [
                    {
                        id: 'synthetic-data',
                        segments: [text('Worked on PII scanners, database subsetting, synthetic-data quality reports and an interactive D3 dashboard.')],
                    },
                ],
            },
        ],
        skills: ['Python', 'Machine learning', 'Synthetic data', 'D3.js'],
    },
];
