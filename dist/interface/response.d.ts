export interface Response {
    status: string;
    body?: unknown;
    headers?: Record<string, unknown>;
}
declare type ClientErrorStatus = '400' | '401' | '403' | '404' | '405' | '409' | '412' | '429';
export interface ClientRequestError extends Response {
    status: ClientErrorStatus;
    body: {
        status: 'error';
        message: string;
        data?: unknown;
    };
}
declare type ServerErrorStatus = '500' | '502' | '503' | '504';
export interface ServerRequestError extends Response {
    status: ServerErrorStatus;
    body: {
        status: 'error';
        message: string;
        data?: unknown;
    };
}
export {};
