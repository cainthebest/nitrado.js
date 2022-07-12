import { URL, RequestResponse } from '../../../../types/url';

export interface Download {
    // Catogory: Gameserver/Files
    // Name: Download file
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesDownload
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/download
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/file_server/download': URL<{
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
            { file: string }
        >;
    }>;
}
