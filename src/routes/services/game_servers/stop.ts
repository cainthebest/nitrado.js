import { URL, RequestResponse } from '../../../types/url';

export interface Stop {
    // Catogory: Gameserver
    // Name: Stop gameserver
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-Stop
    // URL: https://api.nitrado.net/services/{id}/gameservers/stop
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/stop': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: string;
                };
            },
            { message?: string; stop_message?: string }
        >;
    }>;
}
