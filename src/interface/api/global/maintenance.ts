import { URL, RequestResponse } from '../../../types/url';

// Global - Maintenance status
// Docs: https://doc.nitrado.net/#api-Global-GetMaintenance
export interface Maintenance {
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
}
