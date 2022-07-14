import { URL, RequestResponse } from '../../../../types/url';

export interface CreateDir {
    // Catogory: Gameserver/Files
    // Name: Create directory
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesMkdir
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/mkdir
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/file_server/mkdir': URL<{
        post: RequestResponse<
            {
                status: 'success';
                message: string;
            },
            { path: string; name: string }
        >;
    }>;
}
