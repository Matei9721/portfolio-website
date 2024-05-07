import React from 'react';
import {Avatar, Card} from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
const { Meta } = Card;

const ProjectCard = ({ title, description }) => {
    return (
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
                avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
                title={title}
                description={description}
            />
        </Card>
    );
};

export default ProjectCard;
