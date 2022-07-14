import type { Response } from '../interface/response';
import type { CacheAxiosResponse } from 'axios-cache-interceptor';

// All the possible HTTP Methods
type Method = 'get' | 'post' | 'put' | 'delete' | 'options';

// This helper type constructs a function signature for the response type of a method function
// If the method has request data the signature will include that
/* eslint-disable */
export type RequestResponse<
    ResponseData = Response,
    RequestData extends Record<string, any> | false = false,
> = RequestData extends false
    ? (data?: undefined) => Promise<CacheAxiosResponse<ResponseData>>
    : (data: RequestData) => Promise<CacheAxiosResponse<ResponseData>>;

// This helper type is used to define the type of the request data for the handlers
export type RequestData = { [x: string]: any };

// This constructs a object that has Method properties that are functions that return a RequestResponse
export type URL<
    Methods extends {
        [Key in Method]?: RequestResponse<any, any>;
    },
> = Methods;
/* eslint-enable */
