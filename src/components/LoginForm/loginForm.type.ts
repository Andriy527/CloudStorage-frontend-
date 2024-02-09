import {Dispatch, SetStateAction} from "react";
import {TloginData} from "../../services/auth/authService.type.ts";

export interface Iprops {
    setIsLogin: Dispatch<SetStateAction<boolean>>,
    onFinish(data: TloginData): void,
    onFinishFailed(data: unknown) :void
}