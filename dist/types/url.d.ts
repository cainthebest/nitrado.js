import { Response, ClientRequestError, ServerRequestError } from '../interface/response';
import type { AxiosResponse } from 'axios';
declare type Method = 'get' | 'post' | 'put' | 'delete' | 'options';
export declare type RequestResponse<ResponseData extends Response, RequestData extends Record<string, any> | false = false> = RequestData extends false ? (data?: any) => Promise<AxiosResponse<ResponseData | ClientRequestError | ServerRequestError>> : (data: RequestData) => Promise<AxiosResponse<ResponseData | ClientRequestError | ServerRequestError>>;
export declare type URL<Methods extends {
    [Key in Method]?: RequestResponse<any, any>;
}> = Methods;
export {};
