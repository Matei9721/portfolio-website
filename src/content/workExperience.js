const text = (value) => ({text: value});
const link = (value, href) => ({text: value, href});

export const workExperience = [
    {
        id: 'elsevier',
        company: 'Elsevier',
        role: 'Natural Language Processing Data Scientist',
        highlights: [
            {
                id: 'genai-pocs',
                segments: [text('Created multiple GenAI POCs (RAG, image processing, agents), experimenting' +
                    ' prompting strategies and different language models (local and proprietary), and building' +
                    ' full-stack applications with user interfaces. These POCs helped business and content' +
                    ' experts experiment and create new product flows.')],
            },
            {
                id: 'information-extraction',
                segments: [
                    text('Developed and planned information extraction pipelines: created rule-based and ' +
                        'deep-learning models (transformer-based/BERT) and deployed them in production-ready ' +
                        'environments (AWS). The extraction pipelines have been integrated into'),
                    link(' Embiology', 'https://www.elsevier.com/products/embiology'),
                    text(' and improved results of the previous solution by 40% in precision.'),
                ],
            },
            {
                id: 'llm-evaluation',
                segments: [text('Developed an in-house automatic evaluation (supporting local and commercial LLMs)' +
                    ' framework for Retrieval and Generative AI (RAG) applications. (Implemented LLM evaluation' +
                    ' as CI/CD pipelines, significantly reducing manual labour and streamlining the' +
                    ' evaluation process.)')],
            },
            {
                id: 'data-science-leadership',
                segments: [text('Experienced in working and leading data science teams collaborating with architecture' +
                    ' and engineering teams to create development and production workflows for AI' +
                    ' applications (information extraction and RAG)')],
            },
            {
                id: 'ownership-extraction',
                segments: [text('Explored different approaches for creating a novel ownership extraction pipeline that' +
                    ' can identify the owner of a research infrastructure (medical devices)' +
                    ' in a zero‑shot environment.')],
            },
        ],
    },
    {
        id: 'syntho',
        company: 'Syntho',
        role: 'Python Software Engineer Intern',
        highlights: [
            {
                id: 'pii-scanners',
                segments: [text('Improved the existing PII (Personally identifiable information) and' +
                    ' inter-relationship scanners to enhance the accuracy of synthetic data.')],
            },
            {
                id: 'database-subsetting',
                segments: [text('Researched and implemented a distributed subsetting algorithm for shrinking' +
                    ' large production databases into smaller development ones.')],
            },
            {
                id: 'synthetic-data-report',
                segments: [text('Improved the synthetic data report by implementing statistical and ML' +
                    ' models that test quality and privacy features.')],
            },
            {
                id: 'visualization-dashboard',
                segments: [text('Created an interactive visualization dashboard in JS‑D3 that helps clients assess' +
                    ' the quality of the synthetic data produced in an intuitive way.')],
            },
        ],
    },
    {
        id: 'adyen',
        company: 'Adyen',
        role: 'Python Software Engineer Intern',
        highlights: [
            {
                id: 'fraud-detection',
                segments: [text('Implemented an explainable fraud detection model that reached' +
                    ' a balanced accuracy of 89%.')],
            },
            {
                id: 'fraud-dashboard',
                segments: [text('Built a dashboard and A.P.I. that allows a user to modify the model’s thresholds' +
                    ' and settings, while also displaying statistics through visualizations.')],
            },
            {
                id: 'ab-testing',
                segments: [text('Experimented with A/B testing to improve the intuitiveness of the interface.')],
            },
        ],
    },
    {
        id: 'university-of-groningen',
        company: 'U.G.',
        role: 'University of Groningen Teaching Assistant',
        highlights: [
            {
                id: 'teaching-assistant',
                segments: [text('Teaching assistant for the courses: Introduction to information systems,' +
                    ' Advanced Object Oriented Programming, Introduction to Scientific Computing,' +
                    ' Web Engineering. ')],
            },
            {
                id: 'course-support',
                segments: [text('I helped the lecturers create assignments and the exam, grade them, and' +
                    ' conduct laboratories where students could work on their homework and ask' +
                    ' questions about the material.')],
            },
            {
                id: 'student-support',
                segments: [text('I helped students accommodate to their new lives as computer science' +
                    ' international students in The Netherlands.')],
            },
        ],
    },
];
