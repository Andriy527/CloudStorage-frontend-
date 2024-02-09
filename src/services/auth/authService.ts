import {action, makeAutoObservable} from "mobx";
import {$baseApi} from "../../api";
import {IAuthService, IRegisterData, TloginData} from "./authService.type.ts";
import {AxiosError} from "axios";

class AuthService implements IAuthService {
    public isAuth: boolean;
    public token: string | null;
    public message: string | null;

    constructor() {
        this.isAuth = false;
        this.token = null;
        this.message = null;

        makeAutoObservable(this);
    }

    getAuth() {
        return this.isAuth;
    }

    getToken() {
        return this.token;
    }

    @action
    setMessage(message: string) {
        this.message = message;
    }

    getMessage() {
        return this.message;
    }

    @action
    async login(loginData: TloginData) {
        try {
            const { data } = await $baseApi.post('/auth/login', loginData);

            this.token = data.token;
            this.isAuth = true;
        } catch (e: AxiosError) {
            this.setMessage(e.response.data.message);
        }
    }

    @action
    async register(registerData: IRegisterData) {
        try {
            const { data } = await $baseApi.post('/auth/register', registerData);

            this.token = data.token;
            this.isAuth = true;
        } catch (e: AxiosError) {
            this.setMessage(e.response.data.message);
        }
    }

    logout() {
        this.token = null;
        this.isAuth = false;
    }
}


export default new AuthService();