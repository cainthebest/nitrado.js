import { URL, RequestResponse } from '../../../../types/url';

export interface Ping {
    // Catogory: Gameserver/app-server
    // Name: Ping
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-PingConsole
    // URL: https://api.nitrado.net/services/{id}/gameservers/app_server
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/app_server': URL<{
        get: RequestResponse<
            {
                status: 'success';
                message: string;
            },
            { command: string }
        >;
    }>;
}
