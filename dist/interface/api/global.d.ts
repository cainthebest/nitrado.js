import { URL, RequestResponse } from '../../types/url';
export interface Global {
    '/ping': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
    '/maintenance': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    maintenance: {
                        cloud_backend: boolean;
                        domain_backend: boolean;
                        dns_backend: boolean;
                        pmacct_backend: boolean;
                    };
                };
            };
        }>;
    }>;
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
