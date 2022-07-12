import { URL, RequestResponse } from '../../../../types/url';

export interface Move {
    // Catogory: Gameserver/Files
    // Name: Move files
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesMove
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/move
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/file_server/move': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: string;
                };
            },
            {
                source_path: string;
                target_path: string;
                target_filename?: string;
            }
        >;
    }>;
}
