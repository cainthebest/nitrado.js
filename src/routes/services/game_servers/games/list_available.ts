import { URL, RequestResponse } from '../../../../types/url';

export interface ListAvailable {
    // Catogory: Gameserver/Games
    // Name: List available games
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverGameList
    // URL: https://api.nitrado.net/services/{id}/gameservers/games
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/games': URL<{
        post: RequestResponse<{
            status: 'success';
            data: {
                installed_currently: number;
                installed_maximum: number;
                hide_other_mode_games: boolean;
                steam_id?: string;
                locations: Array<{
                    id: number;
                    country: string;
                    city: string;
                }>;
                games: Array<{
                    id: string;
                    steam_id: number;
                    has_steam_game: string;
                    name: string;
                    minecraft_mode: boolean;
                    publicserver_only: boolean;
                    portlist_short: string;
                    folder_short: string;
                    minimum_slots: number;
                    slot_multiplier: unknown;
                    maximum_recommended_slots: number;
                    modpacks: Array<{
                        id?: number;
                        name?: string;
                        modpack_version?: string;
                        modpack_file?: string;
                        visible?: boolean;
                        game_version?: string;
                    }>;
                    icons: {
                        x256: string;
                        x120: string;
                        x64: string;
                        x32: string;
                        x16: string;
                    };
                    installed: boolean;
                    active: boolean;
                    enough_slots: boolean;
                    tags: Array<unknown>;
                    preorder_locations: Array<unknown>;
                    locations: Array<number>;
                }>;
            };
        }>;
    }>;
}
