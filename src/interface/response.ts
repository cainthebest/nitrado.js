export interface Response {
    status: string;
    body?: unknown;
    headers?: Record<string, unknown>;
}

//! Bug with error response types
/* 
type ClientErrorStatus =
    | '400' // Bad Request
    | '401' // Unauthorized
    | '403' // Forbidden
    | '404' // Not Found
    | '405' // Method Not Allowed
    | '409' // Conflict
    | '412' // Precondition Failed
    | '429'; // Too Many Requests
export interface ClientRequestError extends Response {
    status: ClientErrorStatus;
    body: {
        status: 'error';
        message: string;
        data?: unknown;
    };
}
type ServerErrorStatus =
    | '500' // Internal Server Error
    | '502' // Bad Gateway
    | '503' // Service Unavailable
    | '504'; // Gateway Timeout
export interface ServerRequestError extends Response {
    status: ServerErrorStatus;
    body: {
        status: 'error';
        message: string;
        data?: unknown;
    };
}
*/
