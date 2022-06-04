import { URL, RequestResponse } from '../../../types/url';

export interface SubDomain {
    '/services/{id}/subdomain': URL<{
        put: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Changed subdomain.';
                };
            },
            {
                domain_id: number;
                subdomain: string;
            }
        >;
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Deleted subdomain.';
            };
        }>;
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: {
                    subdomain: string;
                    domain: string;
                    fqdn: string;
                    domain_id: number;
                };
            };
        }>;
    }>;
    '/services/{id}/subdomain/domains': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    domains: Array<{
                        name: string;
                        id: number;
                    }>;
                };
            };
        }>;
    }>;
}
