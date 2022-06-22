import { URL, RequestResponse } from '../../../types/url';

// Global - Request current API version
// Docs: https://doc.nitrado.net/#api-Global-GetVersion
export interface Version {
    // https://api.nitrado.net/version
    '/version': URL<{
        // GET request
        get: RequestResponse<{
            // Returns HTTP status code 200 (OK)
            status: '200';
            // Returns the current API version and the success message
            // Example response:
            // { status: 'success', message: 'nitrapi-975-992nd' }
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}
