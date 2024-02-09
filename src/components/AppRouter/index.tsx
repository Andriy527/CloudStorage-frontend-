import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../../pages/Login";
import Dashboard from "../../pages/Dashboard";
import MainLayout from "../MainLayout";
import AuthService from "../../services/auth/authService.ts";
import {observer} from "mobx-react";
import Cabinet from "../../pages/Cabinet";
const AppRouter = observer((): JSX.Element => {

    return (
        <>
            {AuthService.getAuth()
                ?
                <MainLayout>
                    <Routes>
                        <Route element={<Dashboard />} path="/"/>
                        <Route element={<Cabinet />} path="/cabinet" />
                    </Routes>
                </MainLayout>
                :
                <Routes>
                    <Route element={<Login />} path="/"/>
                </Routes>}
        </>
    );
});

export default AppRouter
