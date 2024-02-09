import React, {FC} from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload } from 'antd';
import UserService from "../../services/user/userService.ts";

const UploadButton:FC = () => {
    const handleUpload = (file: File) => {
        UserService.setFile(file);
    }

    return (
        <Upload action={handleUpload}>
            <Button icon={<UploadOutlined />} type="primary">Click to Upload</Button>
        </Upload>
    );
};

export default UploadButton;