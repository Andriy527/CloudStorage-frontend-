import {action, makeAutoObservable} from "mobx";
import {$authApi} from "../../api";
import {AxiosError} from "axios";
import {IFile, IUserService, TFile} from "./userService.type.ts";

class UserService implements IUserService {
    public user;
    public files;
    public selectedCategory: TFile = 'all';
    public selectedFile: null | IFile = null;

    constructor() {
        this.user = null;
        this.files = [];

        makeAutoObservable(this);
    }

    @action
    async getUser() {
        try {
            const {data} = await $authApi.get('/users/me');

            this.user = data;
        } catch (e: AxiosError) {
            console.error(e);
        }
    }

    @action
    async getFiles(type: TFile = 'all') {
        try {
            const {data} = await $authApi.get(`/files?type=${type}`);

            this.files = data;
        } catch (e: AxiosError) {
            console.error(e);
        }
    }

    @action
    async setFile(file: File) {
        const formData = new FormData();

        formData.set('file', file);

        try {
            const {data} = await $authApi.post('/files', formData);

            this.files = [...this.files, data];

        } catch (e: AxiosError) {
            console.error(e);
        }
    }

    @action
    async removeFile(id: number) {
        try {
            await $authApi.delete(`/files?ids=${id}`);

            this.files = this.files.filter(file => file.id !== id);
        } catch (e: AxiosError) {
            console.error(e);
        }
    }

    @action
    setCategory(category: TFile) {
        this.selectedCategory = category;
    }

    @action
    setSelectedFile(file: null | IFile) {
        this.selectedFile = file;
    }
}

export default new UserService();