/**
 * Auth Model Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2019.07.13
 */

export interface AuthModelInterface {
    username: string;
    email: string;
    password: string;
    photo_profile?: string;
    isLogin?: boolean;
}

export interface AuthActionInterface {
    login: (option: AuthModelInterface) => void;
    logout: () => void;
}

export interface AuthStoreInterface {
    model: AuthModelInterface;
    action: AuthActionInterface;
}
