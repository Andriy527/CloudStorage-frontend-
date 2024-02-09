import React, {FC} from 'react';
import { Button, Typography, Form, Input } from 'antd';
import {IRegisterForm, Iprops} from "./registerForm.type.ts";
import {validateEmail} from "../../utils";

const {Text} = Typography;
const RegisterForm: FC<Iprops> = ({setIsLogin, onFinishFailed, onFinish}) => {

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
            <Form.Item<IRegisterForm>
                label="Email"
                name="email"
                rules={[{ required: true, message: 'Please input your email!' }, {validator: validateEmail}]}
            >
                <Input />
            </Form.Item>

            <Form.Item<IRegisterForm>
                label="Full name"
                name="fullName"
                rules={[{ required: true, message: 'Please input your full name!' }]}
            >
                <Input />
            </Form.Item>

            <Form.Item<IRegisterForm>
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input.Password />
            </Form.Item>

            <p>I have account, <Text mark style={{cursor: 'pointer'}} onClick={() => setIsLogin(true)}>login</Text></p>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default RegisterForm;