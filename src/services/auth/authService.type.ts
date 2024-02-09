export interface IRegisterData {
   email: string,
   fullName: string,
   password: string
}
export type TloginData = Pick<IRegisterData, 'email' | 'password'>

export interface IloginResponse {
   token: string
}

export interface IAuthService {
   isAuth: boolean;
   token: string | null;
   message: string | null;
   getAuth(): boolean;
   setMessage(message: string): void;
   getMessage(): string | null;
   login(data: TloginData): Promise<void>;
   register(data: IRegisterData): Promise<void>;
}