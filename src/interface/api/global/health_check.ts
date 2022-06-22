import { URL, RequestResponse } from '../../../types/url';

// Global - Health Check for API
// Docs: https://doc.nitrado.net/#api-Global-DoPing
export interface HealthCheck {
    // https://api.nitrado.net/ping
    '/ping': URL<{
        // GET request
        get: RequestResponse<{
            // Returns HTTP status code 200 (OK)
            status: '200';
            // Returns the success message and the status of the API
            // Example response:
            // { status: 'success', message: 'All systems operate as expected.' }
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}
