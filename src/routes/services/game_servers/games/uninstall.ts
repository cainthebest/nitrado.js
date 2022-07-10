import { URL, RequestResponse } from '../../../../types/url';

export interface Uninstall {
    // Catogory: Gameserver/Games
    // Name: Uninstall game
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverGameDelete
    // URL: https://api.nitrado.net/services/{id}/gameservers/games/uninstall
    // Method: DELETE
    // Status: 200
    '/services/{id}/gameservers/games/uninstall': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}
