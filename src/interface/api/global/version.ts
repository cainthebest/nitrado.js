import { URL, RequestResponse } from '../../../types/url';

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
