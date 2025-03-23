import React from 'react';
import {Card, Tabs, Timeline} from 'antd';

const onChange = (key) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: 'Elsevier',
        children: <div><br/> <strong> Natural Language Processing Data Scientist</strong> <br/> <br/>
            <Timeline
                items={[
                    {
                        children: 'Created multiple GenAI POCs (RAG, image processing, agents), experimenting with' +
                            ' prompting strategies and different language models (local and proprietary), and building' +
                            ' full-stack applications with user interfaces. These POCs helped business and content' +
                            ' experts experiment and create new product flows.',
                    },
                    {
                        children: <>
                            Developed and planned information extraction pipelines: created rule-based and
                            deep-learning models (transformer-based/BERT) and deployed them in production-ready
                            environments (AWS). The extraction pipelines have been integrated into
                            <a href="https://www.elsevier.com/products/embiology"> Embiology</a> and improved results of
                            the previous solution by 40% in precision.
                        </>
                    },
                    {
                        children: 'Developed an in-house automatic evaluation (supporting local and commercial LLMs)' +
                            ' framework for Retrieval and Generative AI (RAG) applications. (Implemented LLM evaluation' +
                            ' as CI/CD pipelines, significantly reducing manual labour and streamlining the' +
                            ' evaluation process.)',
                    },
                    {
                        children: 'Experienced in working and leading data science teams collaborating with architecture' +
                            ' and engineering teams to create development and production workflows for AI' +
                            ' applications (information extraction and RAG)',
                    },
                    {
                        children: 'Explored different approaches for creating a novel ownership extraction pipeline that' +
                            ' can identify the owner of a research infrastructure (medical devices)' +
                            ' in a zero‑shot environment.',
                    },
                ]}
            /></div>,
    },
    {
        key: '2',
        label: 'Syntho',
        children: <div><br/> <strong> Python Software Engineer Intern</strong> <br/> <br/>
            <Timeline
                items={[
                    {
                        children: 'Improved the existing PII (Personally identifiable information) and' +
                            ' inter-relationship scanners to enhance the accuracy of synthetic data.',
                    },
                    {
                        children: 'Researched and implemented a distributed subsetting algorithm for shrinking' +
                            ' large production databases into smaller development ones.'
                    },
                    {
                        children: 'Improved the synthetic data report by implementing statistical and ML' +
                            ' models that test quality and privacy features.',
                    },
                    {
                        children: 'Created an interactive visualization dashboard in JS‑D3 that helps clients assess' +
                            ' the quality of the synthetic data produced in an intuitive way.',
                    }
                ]}
            /></div>,
    },
    {
        key: '3',
        label: 'Adyen',
        children: <div><br/> <strong> Python Software Engineer Intern</strong> <br/> <br/>
            <Timeline
                items={[
                    {
                        children: 'Implemented an explainable fraud detection model that reached' +
                            ' a balanced accuracy of 89%.',
                    },
                    {
                        children: 'Built a dashboard and A.P.I. that allows a user to modify the model’s thresholds' +
                            ' and settings, while also displaying statistics through visualizations.'
                    },
                    {
                        children: 'Experimented with A/B testing to improve the intuitiveness of the interface.',
                    },
                ]}
            /></div>,
    },
    {
        key: '4',
        label: 'U.G.',
        children: <div><br/> <strong> University of Groningen Teaching Assistant</strong> <br/> <br/>
            <Timeline
                items={[
                    {
                        children: 'Teaching assistant for the courses: Introduction to information systems,' +
                            ' Advanced Object Oriented Programming, Introduction to Scientific Computing,' +
                            ' Web Engineering. ',
                    },
                    {
                        children: 'I helped the lecturers create assignments and the exam, grade them, and' +
                            ' conduct laboratories where students could work on their homework and ask' +
                            ' questions about the material.'
                    },
                    {
                        children: 'I helped students accommodate to their new lives as computer science' +
                            ' international students in The Netherlands.',
                    },
                ]}
            /></div>,
    }
];
const WorkProjects = () => <Card style={{background: "white", "margin": 25, minHeight: 270}}>
    <Tabs
    defaultActiveKey="1" size={"small"} style={{margin: -20}} items={items} onChange={onChange}
    tabPosition={"left"}/>
</Card>
export default WorkProjects;