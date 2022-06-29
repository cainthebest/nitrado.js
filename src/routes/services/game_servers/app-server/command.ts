import { URL, RequestResponse } from '../../../../types/url';

export interface Command {
    // Catogory: Gameserver/app-server
    // Name: Send command
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-SendCommand
    // URL: https://api.nitrado.net/services/{id}/gameservers/app_server/command
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/app_server/command': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: string;
                };
            },
            { command: string }
        >;
    }>;
}
