import { URL, RequestResponse } from '../../../types/url';

// Global - Health Check for API
// Docs: https://doc.nitrado.net/#api-Global-DoPing
export interface HealthCheck {
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
