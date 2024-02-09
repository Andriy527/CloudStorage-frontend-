import React, {FC, useEffect, useState} from 'react';
import styles from './file.module.css';
import {Iprops} from "./file.type.ts";
import {isImage} from "../../utils";
import fileIcon from "../../assets/fileIcon.png";
import UserService from "../../services/user/userService.ts";
import {observer} from "mobx-react";

const File: FC<Iprops> = observer(({file}) => {
    const [image, setImage] = useState<string | null>(null);

    useEffect(() => {
        if(isImage(file.mimetype)) {
            setImage(`http://localhost:7777/uploads/${file.filename}`)
        }
    }, [])

    const selectFile = () => {
        UserService.setSelectedFile(file);
    }

    return (
        <div className={`${userService?.selectedFile?.id === file.id ? styles.selectedFile : ''} ${styles.file}`} onClick={selectFile}>
            <img className={styles.fileImage} src={image ? image : fileIcon} />
            <h3>{file.originalName}</h3>
            <h3>Type: <strong>{file.mimetype}</strong></h3>
        </div>
    );
});

export default File;