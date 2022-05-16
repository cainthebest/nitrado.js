import { URL, RequestResponse } from '../../types/url';

export interface Game_Lastoasis {
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