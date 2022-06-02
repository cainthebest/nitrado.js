import { URL, RequestResponse } from '../../../types/url';

export interface Countries {
    '/countries/states': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    states: Record<string, string>;
                };
            };
        }>;
    }>;
    '/countries': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    countries: Record<string, string>;
                };
            };
        }>;
    }>;
}
