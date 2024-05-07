import React from 'react';
import {Card, Tabs, Timeline} from 'antd';
const onChange = (key) => {
    console.log(key);
};

const items = [
    {
        key: '1',
        label: 'Elsevier',
        children: <div> <br/> <strong> NLP Data Scientist III </strong> <br/> <br/>  <Timeline
            items={[
                {
                    children: 'Worked on productionalizing and integrating a new chemical Relation Extraction Machine Learning pipeline into Elsevier`s Embio product.',
                },
                {
                    children: 'Experimented with commercial (OpenAI) and local (Llama 2) LLMs by introducing them into Elsevier`s products.'
                },
                {
                    children: 'Created a POC ML model to predict the ownership relation between a research device and an organisation.',
                },
                {
                    children: 'Improved the memory and speed efficiency of multiple Machine Learning components by a factor of 120% to reduce operational costs.',
                },
            ]}
        /> </div>,
    },
    {
        key: '2',
        label: 'Syntho',
        children: 'Content of Tab Pane 2',
    },
    {
        key: '3',
        label: "UG",
        children: 'Content of Tab Pane 3',
    },
];
const WorkProjects = () => <Card style={{background: "white", "margin": 25, "min-height": 300}}><Tabs defaultActiveKey="1" size={"small"} style={{margin: -20}} items={items} onChange={onChange}  tabPosition={"left"} /></Card>
export default WorkProjects;