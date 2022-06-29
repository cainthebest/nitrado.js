import { URL, RequestResponse } from '../../../../types/url';

export interface Delete {
    // Catogory: Gameserver
    // Name: Gameserver details
    // Official Documentation: https://doc.nitrado.net/#api-Global-GetMaintenance
    // URL: https://api.nitrado.net/maintenance
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/file_server/seek': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        token: {
                            url: string;
                            token: string;
                        };
                    };
                };
            },
            {
                file: string;
                offset: number;
                length: number;
                mode?: 'raw' | 'lines';
            }
        >;
    }>;
}
