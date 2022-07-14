import { URL, RequestResponse } from '../../../../types/url';

export interface Seek {
    // Catogory: Gameserver/Files
    // Name: Seek file
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesSeek
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/seek
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/file_server/seek': URL<{
        get: RequestResponse<
            {
                status: 'success';
                data: {
                    token: {
                        url: string;
                        token: string;
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
