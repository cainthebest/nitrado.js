import { URL, RequestResponse } from '../../../../types/url';

export interface Maintenance {
    // Catogory: Gameserver
    // Name: Gameserver details
    // Official Documentation: https://doc.nitrado.net/#api-Global-GetMaintenance
    // Nitrado.js Documentation: Coming soon
    // URL: https://api.nitrado.net/maintenance
    // Method: GET
    // Status: 200
    // Example Response:
    // {
    //    status: 'success',
    //    data: {
    //        maintenance: {
    //            cloud_backend: false,
    //            domain_backend: false,
    //            dns_backend: false,
    //            pmacct_backend: false,
    //        },
    //    },
    // }
    '/services/{id}/gameservers': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    gameserver: {
                        must_be_started: boolean;
                        status: string;
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
                        type: string;
                        memory: string;
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
