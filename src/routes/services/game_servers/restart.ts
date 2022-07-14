import { URL, RequestResponse } from '../../../types/url';

export interface Restart {
    // Catogory: Gameserver
    // Name: Restart gameserver
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-Restart
    // URL: https://api.nitrado.net/services/{id}/gameservers/restart
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/restart': URL<{
        post: RequestResponse<
            {
                status: 'success';
                message: string;
            },
            { message?: string; restart_message?: string }
        >;
    }>;
}
