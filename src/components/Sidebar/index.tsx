import React, {FC} from 'react';
import { Layout, Menu } from 'antd';
import UploadButton from "../UploadButton";
import UserService from "../../services/user/userService.ts";
import {isFileCategory} from "./sidebar.guards.ts";

const { Sider } = Layout;
const Sidebar: FC = () => {

    const handleMenuClick = (key: string) => {
        if(isFileCategory(key)) {
            UserService.setCategory(key);
        }
    }

    return (
        <Layout style={{ padding: '24px 0'}} >
            <Sider width={200}>
                <UploadButton />
                <Menu
                    mode="inline"
                    defaultSelectedKeys={[userService.selectedCategory]}
                    style={{ height: '100%' }}
                    onClick={(e) => handleMenuClick(e.key)}
                >
                    <Menu.Item key="all">
                       all files
                    </Menu.Item>
                    <Menu.Item key="photos">
                        photos
                    </Menu.Item>
                    <Menu.Item key="trash">
                        trash
                    </Menu.Item>
                </Menu>
            </Sider>

        </Layout>
    );
};

export default Sidebar;