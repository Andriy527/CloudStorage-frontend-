import React, {FC, useEffect} from 'react';
import {Iprops} from "./fileList.type.ts";
import {Button, Flex} from "antd";
import UserService from "../../services/user/userService.ts";
import File from "../File";
import {observer} from "mobx-react";
import styles from './fileList.module.css';
import {IFile} from "../../services/user/userService.type.ts";

const FileList: FC<Iprops> = observer(({type}) => {

    useEffect(() => {
        UserService.getFiles(type);
        UserService.setSelectedFile(null);
    }, [UserService.selectedCategory])

    const removeFile = () => {
        if(UserService.selectedFile) {
            UserService.removeFile(UserService.selectedFile.id);
        }
    }

    return (
        <div>
            {(UserService.selectedFile && UserService.selectedCategory !== 'trash') && (
                <Flex wrap="wrap" gap="small" justify="space-around">
                    <h3>Selected file: <b>{UserService.selectedFile.originalName}</b></h3>
                    <Button onClick={removeFile} type="primary" danger>
                       Remove file
                    </Button>
                </Flex>
            )}

        <div className={styles.container}>
            {UserService.files && (
                UserService.files.map((file: IFile) => {
                   return <File file={file} key={new Date().getDate()}/>
                })
            )}

        </div>
        </div>
    );
});

export default FileList;