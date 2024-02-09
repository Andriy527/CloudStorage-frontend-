import {Dispatch, SetStateAction} from "react";
import {IRegisterData} from "../../services/auth/authService.type.ts";

export interface Iprops {
    setIsLogin: Dispatch<SetStateAction<boolean>>,
    onFinish(data: IRegisterData): void,
    onFinishFailed(data: unknown) :void
}
