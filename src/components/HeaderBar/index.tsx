import React, {FC} from 'react';
import { Layout, Menu, Button } from 'antd';
import {useLocation} from "react-router-dom";
import {Link} from "react-router-dom";
import UserService from "../../services/user/userService.ts";
import AuthService from "../../services/auth/authService.ts";
import {observer} from "mobx-react";

const { Header } = Layout;
const HeaderBar:FC = observer(() => {
    const { pathname } = useLocation();

    const logout = () => {
        AuthService.logout();
    }

    return (
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[pathname]}
                style={{ flex: 1, minWidth: 0 }}
            >
                <Menu.Item key="/">
                    <Link to="/">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="/cabinet">
                    <Link to="/cabinet">Cabinet</Link>
                </Menu.Item>
            </Menu>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h4 style={{color: '#FFF'}}>{UserService.user?.fullName}</h4>
                <Button onClick={logout} style={{marginLeft: '20px'}} type="primary" danger>Logout</Button>
            </div>
        </Header>
    );
});

export default HeaderBar;