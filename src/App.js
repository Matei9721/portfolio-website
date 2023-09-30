import React from 'react';
import TypeLoop from './components/TypeLoop';
import Draw from "./components/DrawingCanvas"
import { Layout, theme, Card, Col, Row, Avatar, FloatButton } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { ReactTerminal } from "react-terminal";
import PageHeader from "./components/PageHeader";

const { Header, Content, Footer } = Layout;

const { Meta } = Card;

function App() {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const commands = {
        help: (<span>
        <strong>whoami</strong> - Who am I? <br />
        <strong>education</strong> - Get information about my education. <br />
        <strong>experience</strong> - Get information about my work experience. <br />
        <strong>clear</strong> - Clears the console. <br />
      </span>),
        whoami: <span data-entity="verb"> Matei Penca </span>,
        cd: (directory) => `changed path to ${directory}`
    };

    const welcomeMessage = (
        <span>
      Type "help" for all available commands. <br />
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

              }}
          >

          </Header>

          {/*One page layout content*/}
          <Content >
              <Draw />
              {/*Name header*/}
              <TypeLoop />


              {/* About me -- Terminal */}
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

              {/* Projects */}
              <Row style={{"marginTop": 100}}>
                  <Col flex={"auto"}>
                      <Card
                          style={{"margin": 25}}
                          cover={
                              <img
                                  alt="example"
                                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                              />
                          }
                          actions={[
                              <SettingOutlined key="setting" />,

                          ]}
                      >
                          <Meta
                              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                              title="Card title"
                              description="This is the description"
                          />
                      </Card>
                  </Col>
                  <Col flex={"auto"}>
                      <Card
                          style={{"margin": 25}}
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
                              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                              title="Card title"
                              description="This is the description"
                          />
                      </Card>
                  </Col>
                  <Col flex={"auto"}>
                      <Card
                          style={{"margin": 25}}
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
                              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
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
