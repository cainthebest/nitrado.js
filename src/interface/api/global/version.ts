import { URL, RequestResponse } from '../../../types/url';

// Global - Request current API version
// Docs: https://doc.nitrado.net/#api-Global-GetVersion
export interface Version {
    '/version': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}
