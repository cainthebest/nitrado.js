import { URL, RequestResponse } from '../../../../types/url';

export interface ListAllGames {
    // Catogory: Gameserver/Games
    // Name: List all games
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFullGameList
    // URL: https://api.nitrado.net/gameserver/games
    // Method: GET
    // Status: 200
    '/gameserver/games': URL<{
        get: RequestResponse<{
            status: 'success';
            data: {
                games: {
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
                        tags: Array<unknown>;
                        preorder_locations: Array<unknown>;
                        locations: Array<number>;
                    }>;
                };
            };
        }>;
    }>;
}
