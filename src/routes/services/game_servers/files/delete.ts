import { URL, RequestResponse } from '../../../../types/url';

export interface Delete {
    // Catogory: Gameserver/Files
    // Name: Delete file or directory
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesDelete
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/delete
    // Method: DELETE
    // Status: 200
    '/services/{id}/gameservers/file_server/delete': URL<{
        delete: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: string;
                };
            },
            { path: string }
        >;
    }>;
}
