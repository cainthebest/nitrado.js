// The interface for the response from the API
export interface Response {
    status: string;
    body?: unknown;
    headers?: Record<string, unknown>;
}

//! Bug with error response types, just exported to user for now
type ClientErrorStatus =
    | '400' // Bad Request
    | '401' // Unauthorized
    | '403' // Forbidden
    | '404' // Not Found
    | '405' // Method Not Allowed
    | '409' // Conflict
    | '412' // Precondition Failed
    | '429'; // Too Many Requests

type ServerErrorStatus =
    | '500' // Internal Server Error
    | '502' // Bad Gateway
    | '503' // Service Unavailable
    | '504'; // Gateway Timeout

// The interface for the error response from the API
export interface RequestError extends Response {
    status: ClientErrorStatus | ServerErrorStatus;
    body: {
        status: 'error';
        message: string;
        data?: unknown;
    };
}
