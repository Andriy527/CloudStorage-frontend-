import React, {FC} from 'react';
import {Layout} from 'antd';
import HeaderBar from "../HeaderBar";
import {Iprops} from "./mainLayout.type.ts";
import Sidebar from "../Sidebar";

const { Content } = Layout;

const MainLayout:FC<Iprops> = ({children}) => {

    return (
        <Layout>
          <HeaderBar />
            <Content style={{ padding: '0 48px' }}>
                {children}
            </Content>
        </Layout>
    );
};

export default MainLayout;