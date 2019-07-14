export interface AuthInterface {
    email: string;
    password: string;
    token?: string | number;
    isLogin?: boolean;
}
