import { URL, RequestResponse } from '../../../../types/url';

export interface Copy {
    // Catogory: Gameserver/Files
    // Name: Copy file or directory
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesCopy
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/copy
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/file_server/copy': URL<{
        post: RequestResponse<
            {
                status: 'success';
                message: string;
            },
            { source_path: string; target_path: string; target_name: string }
        >;
    }>;
}
