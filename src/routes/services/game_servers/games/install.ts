import { URL, RequestResponse } from '../../../../types/url';

export interface InstallGame {
    // Catogory: Gameserver/Games
    // Name: Install game
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverGameInstall
    // URL: https://api.nitrado.net/services/{id}/gameservers/games/install
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/games/install': URL<{
        post: RequestResponse<
            {
                status: 'success';
                message: string;
            },
            { game: string; modpack?: string }
        >;
    }>;
}
