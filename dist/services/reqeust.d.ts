import { Method, AxiosHeaders } from 'axios';
type IDoRequestOptins = {
    url: string;
    method: Method;
    headers: AxiosHeaders;
    data?: object;
};
export declare const request: (options: IDoRequestOptins, __callback?: string) => Promise<unknown>;
export {};
