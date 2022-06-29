import { URL, RequestResponse } from '../../types/url';

export interface Version {
    '/version': URL<{
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
