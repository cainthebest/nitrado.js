import { URL, RequestResponse } from '../../../types/url';
import {
    GameserverStatusCodes,
    GameserverType,
    GameserverMemoryType,
} from '../../../types/body';

export interface Details {
    // Catogory: Gameserver
    // Name: Gameserver details
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-Details
    // URL: https://api.nitrado.net/services/{id}/gameservers
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    gameserver: {
                        must_be_started: boolean;
                        status: GameserverStatusCodes;
                        websocket_token: string;
                        hostsystems: Record<
                            'linux' | 'windows',
                            Record<string, unknown>
                        >;
                        username: string;
                        managed_root: boolean;
                        user_id: number;
                        service_id: number;
                        location_id: number;
                        minecraft_mode: boolean;
                        ip: string;
                        ipv6: string;
                        port: number;
                        query_port: number;
                        rcon_port: number;
                        label: string;
                        type: GameserverType;
                        memory: GameserverMemoryType;
                        memory_mb: number;
                        game: string;
                        game_human: string;
                        game_specific: Record<string, unknown>;
                        modpacks: Record<string, unknown>;
                        slots: number;
                        location: string;
                        credentials: Record<
                            string,
                            {
                                hostname: string;
                                port: number;
                                username: string;
                                password: string;
                            }
                        >;
                        settings: Record<string, unknown>;
                        quota: Record<string, unknown>;
                        query: Record<string, unknown>;
                    };
                };
            };
        }>;
    }>;
}
