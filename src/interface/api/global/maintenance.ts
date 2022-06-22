import { URL, RequestResponse } from '../../../types/url';

export interface Maintenance {
    // Catogory: Global
    // Name: Maintenance status
    // Official Documentation: https://doc.nitrado.net/#api-Global-GetMaintenance
    // Nitrado.js Documentation: Coming soon
    // URL: https://api.nitrado.net/maintenance
    // Method: GET
    // Status: 200
    // Example Response:
    // {
    //    status: 'success',
    //    data: {
    //        maintenance: {
    //            cloud_backend: false,
    //            domain_backend: false,
    //            dns_backend: false,
    //            pmacct_backend: false,
    //        },
    //    },
    // }
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
