import { URL, RequestResponse } from '../../../../types/url';

export interface Upload {
    // Catogory: Gameserver/Files
    // Name: Upload file
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesUpload
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/upload
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/file_server/upload': URL<{
        post: RequestResponse<
            {
                status: 'success';
                data: {
                    token: {
                        url: string;
                        token: string;
                    };
                };
            },
            { path: string; file: string }
        >;
    }>;
}
