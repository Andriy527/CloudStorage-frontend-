import React, {useState} from 'react';
import LoginForm from "../../components/LoginForm";
import RegisterForm from "../../components/RegisterForm";
import styles from './login.module.css';
import AuthService from "../../services/auth/authService.ts";
import {IRegisterData, TloginData} from "../../services/auth/authService.type.ts";
import {observer} from "mobx-react";

const Login = observer((): JSX.Element => {
    const [isLogin, setIsLogin] = useState(true);

    const onFinish = (data: IRegisterData | TloginData) => {
        if ("fullName" in data) {
           AuthService.register(data);
        } else {
            AuthService.login(data);
        }
    }

    const onFinishFailed = (data: unknown) => {
        console.log(data);
    }

    return (
        <div className={styles.formWrapper}>
            {isLogin
            ?
            <LoginForm setIsLogin={setIsLogin} onFinish={onFinish} onFinishFailed={onFinishFailed}/>
            :
            <RegisterForm setIsLogin={setIsLogin} onFinish={onFinish} onFinishFailed={onFinishFailed} />
            }
            {AuthService.message && (<p className={styles.errorMessage}>{AuthService.message}</p>)}
        </div>
    );
});

export default Login;