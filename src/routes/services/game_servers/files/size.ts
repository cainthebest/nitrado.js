import { URL, RequestResponse } from '../../../../types/url';

export interface Size {
    // Catogory: Gameserver/Files
    // Name: Get file size
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesSize
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/size
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/file_server/size': URL<{
        get: RequestResponse<
            {
                status: 'success';
                data: {
                    size: number;
                };
            },
            { path: string }
        >;
    }>;
}
