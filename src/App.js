import React, {useEffect} from 'react';
import ReactGA from 'react-ga4';
import { ReactTerminal } from "react-terminal";

import { Layout, Card, Col, Row, FloatButton } from 'antd';
import {GithubOutlined, QuestionCircleOutlined} from '@ant-design/icons';

import TypeLoop from './components/TypeLoop';
import Draw from "./components/DrawingCanvas"
import TypewriterHeader from "./components/TypewriterHeader";
import WorkProjects from "./components/WorkProjects";
import AudioPlayer from 'react-modern-audio-player';


const { Header, Content } = Layout;
const { Meta } = Card;

function App() {

    // Add Google Analytics listener for page views
    useEffect(() => {
        ReactGA.initialize('G-645W9NXVRJ');
        // Send pageview with a custom path
        ReactGA.send({ hitType: "pageview", page: "/portfolio-website", title: "Landing Page" });
    }, [])

    const handleClick = (platform) => {
        ReactGA.event({
            category: 'Social Links',
            action: 'Click',
            label: platform,
        });
    };

    const commands = {
        help: (<span>
        <strong>whoami</strong> - Who am I? <br />
        <strong>education</strong> - Get information about my education! <br />
        <strong>spotify</strong> - Listen to the Spotify preview of my favourite songs. <br />
        <strong>experience</strong> - Get information about my work experience. <br />
        <strong>clear</strong> - Clears the console. <br />
      </span>),
        whoami: <span> My name is <span data-entity="developer"> Matei Penca </span>. I was born in Romania, and after
        completing the high school there, I started a new chapter in my life by doing my Bachelor and Master degrees
        in different cities around The Netherlands. Currently, I am still living in the Netherlands, enjoying the
        not so frequent sunny days. My hobbies include running, biking and bouldering with occasional video gaming
        sessions. </span>,
        cd: (directory) => `changed path to ${directory}`,
        education: <span>I have started my formal higher education in Groningen, The Netherlands in 2019 where I studied
        Computing Science which is just a different term for Computer Science :) . Because I was always attrached to the
        business aspect of software and because I had somewhat of a premonition of A.I. taking over I decided to do a
        Master's in Data Science at the University of Amsterdam.</span>,
        experience: <span>My first experience with building A.I. powered software started at <span data-entity="company">Syntho</span> where I learnt how
        to build, test and deploy software in an Agile way. Working in a start-up was a great way to accumulate a lot
        of experience in a fast way. After that I moved my knowledge to <span data-entity="company">Elsevier </span> where I am currently focusing on
        building generative A.I. powered but also traditional ML applications. I am focusing on developing both on
        the technical side but also on the business understanding and managing side.</span>,

        spotify: <span> <br/> Here are 3 of my favourite songs I listed on repeat. As you can tell I like to listen to many genres and many languages,
            I hope one of these songs will be on your liking :)  <br/> <br/> <AudioPlayer  playList={[
            {
                name: <a target="_blank" href="https://www.youtube.com/watch?v=EqdM24AJb3Q">Bleach 🔗</a>,
                writer: 'Anatu',
                img: 'https://i.scdn.co/image/ab67616d00001e0280df66933577254e0ec78868',
                src: 'https://p.scdn.co/mp3-preview/0988f434a22698bbc4b66d4cc8ef2f011c1a013f?cid=cfe923b2d660439caf2b557b21f31221',
                id: 1,
            },
            {
                name: <a target="_blank" href="https://www.youtube.com/watch?v=zUqxUSuCoQQ">Interstelar 🔗</a>,
                writer: 'Alexia',
                img: 'https://i.scdn.co/image/ab67616d0000b2738da174a5a172967f23a7cac6',
                src: 'https://p.scdn.co/mp3-preview/132aafd543baa27b13249b14e8def5e94ce29caa?cid=cfe923b2d660439caf2b557b21f31221',
                id: 2,
            },
            {
                name: <a target="_blank" href="https://www.youtube.com/watch?v=oJ492O5Z1f4">Candy Thief 🔗</a>,
                writer: 'Beatpella',
                img: 'https://i.scdn.co/image/ab67616d0000b273bb0001514868a3156783bcd8',
                src: 'https://p.scdn.co/mp3-preview/140113f7c2cceee9c60d105fec8ac5b57a2a2318?cid=cfe923b2d660439caf2b557b21f31221',
                id: 3,
            },
        ]} activeUI={{
            all: true,
            playButton: true,
            volume: true,
            volumeSlider: true,
            repeatType: true,
            trackTime: true,
            trackInfo: true,
            artwork: true,
        }} audioInitialState={{
            muted: false,
            volume: 0.2,
            curPlayId: 1,
            repeatType: "ALL",
            isPlaying: false
        }} /></span>
    };

    const welcomeMessage = (
        <span>
      >>> My day to day work revolves around turning cool ideas to real-world solutions powered by artificial intelligence.
            I've been working as a <span data-entity="role">Software Engineer </span> and <span data-entity="role">Data Scientist </span>
            &nbsp;where I've build A.I. application in different
            domains and companies. Right now I am learning and building GenAI software, deep learning powered
            search engines and information extraction pipelines.  I love taking projects from brainstorm to reality,
            and I'm really into leading and diving deep into different domains.
            <br /><br /> Even though I currently work in the Data Science sphere, I still see myself as a <span data-entity="role">Software Engineer </span>
            &nbsp;at core. I like spending time coding in different languages (like JavaScript, Java or C for some low level
            projects) and learning new practices and patterns.<br /> <br/> You can <strong>use this
            Terminal</strong> to find more about me. Type <strong>help</strong> to see all available commands!<br />
    </span>
    );

  return (
      <Layout className="App">

          {/*Nav bar Header, currently I don't store anything in it, might remove it later*/}
          <Header
              style={{
                  top: 0,
                  zIndex: 1,
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  background: '#272822'

              }}
          >
          </Header>

          {/*One page layout content is enough for my personal website*/}
          <Content >
              {/*Drawing canvas*/}
              <Draw />
              {/*Landing introduction screen*/}
              <TypeLoop />
              {/* About me -- Terminal */}
              <TypewriterHeader title={"About me"}/>
              <div className="terminal">
                  <ReactTerminal
                      welcomeMessage={welcomeMessage}
                      commands={commands} themes={{
                      "my-custom-theme": {
                          themeBGColor: "#efeff0",
                          themeToolbarColor: "#efeff0",
                          themeColor: "#262323",
                          themePromptColor: "#310930",
                      }
                  }}
                      theme="my-custom-theme"
                  />
              </div>
              <TypewriterHeader title={"Work Experience"}/>
              <WorkProjects/>
              <TypewriterHeader title={"Personal Projects"}/>
              {/* Projects */}
              <Row style={{"marginTop": 70}} >
                  <Col flex={"auto"} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Card
                          style={{"margin": 5, "maxWidth": 450}}
                          cover={
                              <img
                                  alt="example"
                                  src="https://i.ibb.co/Bc4ScZY/DALL-E-2024-09-15-21-30-34-A-super-simplistic-and-cute-design-for-a-Gen-AI-application-thumbnail-Sho.webp"
                                  style={{ width: '100%' , height:"275px"}}
                              />
                          }
                          actions={[
                              <a href={"https://github.com/Matei9721/ai-search-engine"} target="_blank" rel="noopener noreferrer">
                                  <GithubOutlined key="setting" /> </a>,
                              <QuestionCircleOutlined key="setting" />,
                          ]}
                      >
                          <Meta
                              title="GenAI ChatBot Assistant that can surf the web"
                              description="This project is a Generative AI (GenAI) application that leverages LangGraph
                               to build an agent-driven Retrieval-Augmented Generation (RAG) system. The application
                                integrates an open-source web search engine to search for real-time information to
                                 answer user queries."
                          />
                      </Card>
                  </Col>
                  <Col flex={"auto"} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Card
                          style={{"margin": 5, "maxWidth": 450}}
                          cover={
                              <img
                                  alt="ID Lab Logo"
                                  src="https://raw.githubusercontent.com/osoc22/project-idlab/049fd122bdbf4d9426c90bcb5d1dc244c5c5f8f1/docs/assets/powerful-personal-data-crest.svg"
                                  style={{ width: '100%' , height:"275px", display: 'flex', justifyContent: 'center'}}
                              />
                          }
                          actions={[
                              <a href={"https://github.com/osoc22/project-idlab"} target="_blank" rel="noopener noreferrer">
                              <GithubOutlined key="setting" /> </a>,
                              <QuestionCircleOutlined key="setting" />,
                          ]}
                      >
                          <Meta
                              title="Project IDLab - Powerful Personal Data"
                              description="As part of a month-long Hackaton in Belgium, I have partnered up with IDLab
                               and Imec to showcase how taking back control of your personal data can be achieved using
                                linked data and Solid pods. Our final product was a linked-data connected weather app."
                              style={{ width: '100%' , height:'100%'}}
                          />
                      </Card>
                  </Col >

                  <Col flex={"auto"} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Card
                          style={{"margin": 5, "maxWidth": 450}}
                          cover={
                              <img
                                  alt="example"
                                  src="https://raw.githubusercontent.com/Matei9721/portofolio-website/main/src/resources/website.PNG"
                                  style={{ width: '100%' , height:"300px"}}
                              />
                          }
                          actions={[
                              <a href={"https://github.com/Matei9721/portofolio-website"} target="_blank" rel="noopener noreferrer">
                              <GithubOutlined key="setting" /> </a>,
                              <QuestionCircleOutlined key="setting" />,
                          ]}
                      >
                          <Meta
                              title="This website you're currently on"
                              description="To brush up my JavaScript skills, I built this personal website using the
                               dynamic duo of React and Ant Design. I 'borrowed' ideas from the internet and gave them
                                my own quirky twist. Check out the code antics on GitHub!"
                          />
                      </Card>
                  </Col>
                  <Col flex={"auto"} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Card
                          hoverable
                          style={{"margin": 5, "maxWidth": 450}}
                          cover={
                              <img
                                  alt="Discord Bot"
                                  src="https://github-production-user-asset-6210df.s3.amazonaws.com/60573633/275339002-7f07be17-1655-4d2e-ae96-d1d21b099235.PNG"
                              />
                          }
                          actions={[
                              <a href={"https://github.com/Matei9721/js-discord-bot"} target="_blank" rel="noopener noreferrer">
                                  <GithubOutlined key="setting" /> </a>,
                              <QuestionCircleOutlined key="setting" />,

                          ]}
                      >
                          <Meta
                              title="Discord Javascript bot"
                              description="A JavaScript bot using the official Discord API which can play music
                              using Youtube's API. Supports queues, livestreams and keyword search. Developed with
                              my best friend so we can finally argue about code we both contribute to."
                              style={{ width: '100%' , height:'100%'}}

                          />
                      </Card>
                  </Col>

              </Row>

          </Content>

          {/*Go Back to the Top*/}
          <FloatButton.BackTop />
      </Layout>

  )
}

export default App;
