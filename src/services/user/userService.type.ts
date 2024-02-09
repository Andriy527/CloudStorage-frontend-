export interface IUser {
    id: number,
    email: string
}

export interface IFile {
    deletedAt: null | string,
    filename: string,
    id: number,
    mimetype: string,
    originalName: string,
    size: number
}

export interface IUserService {
    user: null | IUser;
    files: [] | IFile[];
    selectedCategory: string;
    getUser() : Promise<void>;
    getFiles(type: TFile): Promise<void>;
    setFile(file: File): Promise<void>;
    removeFile(id: number): Promise<void>;
    setCategory(category: TFile): void;
    setSelectedFile(file: null | IFile): void;
}

export type TFile = "all" | "photos" | "trash";