import { URL, RequestResponse } from '../../types/url';

export interface Game_Server {
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
    '/services/{id}/gameservers/restart': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Server will be restarted now.';
                };
            },
            { message?: string; restart_message?: string }
        >;
    }>;
    '/services/{id}/gameservers/stop': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Server will be stopped now.';
                };
            },
            { message?: string; stop_message?: string }
        >;
    }>;
}
