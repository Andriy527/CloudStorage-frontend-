import React, {FC, useEffect} from 'react';
import UserService from "../../services/user/userService.ts";
import FileList from "../../components/FileList";
import Sidebar from "../../components/Sidebar";
import {observer} from "mobx-react";
const Dashboard: FC = observer(() => {
    useEffect(() => {
        UserService.getUser();
    }, [])

    return (
        <div>
            <h1>dashboard</h1>
            <Sidebar />
            <FileList type={UserService.selectedCategory} />
        </div>
    );
});

export default Dashboard;