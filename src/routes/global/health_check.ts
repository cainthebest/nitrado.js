import { URL, RequestResponse } from '../../types/url';

export interface HealthCheck {
    '/ping': URL<{
        // GET request
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}
