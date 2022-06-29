// The interface for the response from the API
export interface Response {
    status: string;
    body?: unknown;
    headers?: Record<string, unknown>;
}


