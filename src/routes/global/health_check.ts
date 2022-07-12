import { URL, RequestResponse } from '../../types/url';

export interface HealthCheck {
    // Catogory: Global
    // Name: Health check / ping
    // Official Documentation: https://doc.nitrado.net/#api-Global-DoPing
    // URL: https://api.nitrado.net/ping
    // Method: GET
    // Status: 200
    '/ping': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}
