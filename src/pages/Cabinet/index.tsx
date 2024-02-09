import React, {FC} from 'react';
import UserService from "../../services/user/userService.ts";

const Cabinet: FC = () => {

    return (
        <div>
            <h1>welcome to cabinet {UserService.user.fullName}</h1>
            <h3>Email: <strong>{UserService.user.email}</strong></h3>
            <h3>Password: <strong>{UserService.user.password}</strong></h3>
        </div>
    );
};

export default Cabinet;