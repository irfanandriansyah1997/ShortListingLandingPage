export interface AuthModelInterface {
    username: string;
    email: string;
    password: string;
    photo_profile: string;
    isLogin: boolean;
}

export interface AuthActionInterface {
    login: (option: AuthModelInterface) => void;
    logout: () => void;
}

export interface AuthStoreInterface {
    model: AuthModelInterface;
    action: AuthActionInterface;
}
