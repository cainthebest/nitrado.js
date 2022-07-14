import { URL, RequestResponse } from '../../types/url';

export interface Version {
    // Catogory: Global
    // Name: Get API version
    // Official Documentation: https://doc.nitrado.net/#api-Global-GetVersion
    // URL: https://api.nitrado.net/version
    // Method: GET
    // Status: 200
    '/version': URL<{
        get: RequestResponse<{
            status: 'success';
            message: string;
        }>;
    }>;
}
