import {
    Response,
    ClientRequestError,
    ServerRequestError,
} from '../interface/response';

import type { AxiosResponse } from 'axios';

// All the possible HTTP Methods
type Method = 'get' | 'post' | 'put' | 'delete' | 'options';

// This helper type constructs a function signature for the response type of a method function
// If the method has request data the signature will include that
/* eslint-disable  @typescript-eslint/no-explicit-any */
export type RequestResponse<
    ResponseData extends Response,
    RequestData extends Record<string, any> | false = false,
> = RequestData extends false
    ? (
          data?: any,
      ) => Promise<
          AxiosResponse<ResponseData | ClientRequestError | ServerRequestError>
      >
    : (
          data: RequestData,
      ) => Promise<
          AxiosResponse<ResponseData | ClientRequestError | ServerRequestError>
      >;

// This constructs a object that has Method properties that are functions that return a RequestResponse
export type URL<
    Methods extends {
        [Key in Method]?: RequestResponse<any, any>;
    },
> = Methods;
/* eslint-enable  @typescript-eslint/no-explicit-any */
