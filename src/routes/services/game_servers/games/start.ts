import { URL, RequestResponse } from '../../../../types/url';

export interface Start {
    // Catogory: Gameserver/Games
    // Name: Start game
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverGameRestart
    // URL: https://api.nitrado.net/services/{id}/gameservers/games/start
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/games/start': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}
