import React from 'react';
import TypeLoop from './components/TypeLoop';
import Draw from "./components/DrawingCanvas"
import { Layout, theme, Card, Col, Row, Avatar, FloatButton } from 'antd';
import {EditOutlined, EllipsisOutlined, GithubOutlined, SettingOutlined} from '@ant-design/icons';
import { ReactTerminal } from "react-terminal";
import MyComponent from "./components/Header";
import WorkProjects from "./components/WorkProjects";


const { Header, Content, Footer } = Layout;

const { Meta } = Card;

function App() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const commands = {
        help: (<span>
        <strong>whoami</strong> - Who am I? <br />
        <strong>education</strong> - Get information about my education! <br />
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
        the technical side but also on the business understanding and managing side.</span>
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

          {/*Nav bar Header*/}
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

          {/*One page layout content*/}
          <Content >
              <Draw />
              {/*Name header*/}
              <TypeLoop />


              {/* About me -- Terminal */}
              <MyComponent title={"About me"}/>
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
              <MyComponent title={"Work Experience"}/>
              <WorkProjects/>
              <MyComponent title={"Personal Projects"}/>
              {/* Projects */}
              <Row style={{"marginTop": 70}} >
                  <Col flex={"auto"} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Card
                          hoverable
                          style={{"margin": 5, "width": 600}}
                          cover={
                              <img
                                  alt="Discord Bot"
                                  src="https://github-production-user-asset-6210df.s3.amazonaws.com/60573633/275339002-7f07be17-1655-4d2e-ae96-d1d21b099235.PNG"
                              />
                          }
                          actions={[
                              <SettingOutlined key="setting" />,

                          ]}
                      >
                          <Meta
                              title="Discord Javascript bot"
                              description="A JavaScript bot using the official Discord API which can play music
                              using Youtube's API. Supports queues, livestreams and keyword search. Developed with
                              my best friend so we can finally argue about code we both contribute to."
                          />
                      </Card>
                  </Col>
                  <Col flex={"auto"} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Card
                          style={{"margin": 5, "width": 600}}
                          cover={
                              <img
                                  alt="ID Lab Logo"
                                  src="https://raw.githubusercontent.com/osoc22/project-idlab/049fd122bdbf4d9426c90bcb5d1dc244c5c5f8f1/docs/assets/powerful-personal-data-crest.svg"
                                  style={{ width: '100%' , height:"375px"}}
                              />
                          }
                          actions={[
                              <SettingOutlined key="setting" />,
                              <EditOutlined key="edit" />,
                              <EllipsisOutlined key="ellipsis" />,
                          ]}
                      >
                          <Meta
                              title="Project IDLab - Powerful Personal Data"
                              description="As part of a month-long Hackaton in Belgium, I have partnered up with IDLab and Imec to showcase how taking back control of your personal data can be achieved using linked data and Solid pods. We have built a smart calendar application that takes advantage of linked data to serve weather data for the events that you store on your private Solid pod."
                          />
                      </Card>
                  </Col >
                  <Col flex={"auto"} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Card
                          style={{"margin": 5, "width": 600}}
                          cover={
                              <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                              />
                          }
                          actions={[
                              <SettingOutlined key="setting" />,
                              <EditOutlined key="edit" />,
                              <EllipsisOutlined key="ellipsis" />,
                          ]}
                      >
                          <Meta
                              title="Card title"
                              description="This is the description"
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
