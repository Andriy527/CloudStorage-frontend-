import React, {FC} from 'react';
import { Button, Form, Input, Typography } from 'antd';
import {ILoginForm, Iprops} from "./loginForm.type.ts";
import {validateEmail} from "../../utils";

const {Text} = Typography;
const LoginForm: FC<Iprops> = ({setIsLogin, onFinishFailed, onFinish}) => {

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Form.Item<ILoginForm>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }, {validator: validateEmail}]}
            >
                <Input />
            </Form.Item>

            <Form.Item<ILoginForm>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <p>Don't have account? <Text mark style={{cursor: 'pointer'}} onClick={() => setIsLogin(false)}>registration</Text></p>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;