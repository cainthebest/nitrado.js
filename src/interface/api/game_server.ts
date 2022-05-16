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
    '/services/{id}/gameservers/backups': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    backups: {
                        gameserver: Record<
                            string,
                            Array<{
                                backup_type: string;
                                backup_timestamp: number;
                                backup_number: number;
                                backup_size: number;
                                backup_file_size: number;
                            }>
                        >;
                        database: Record<
                            string,
                            Array<{
                                backup_file: string;
                                backup_size: number;
                                backup_timestamp: number;
                            }>
                        >;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/gameservers/app_server/command': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Command successful send to the application server';
                };
            },
            { command: string }
        >;
    }>;
    '/services/{id}/gameservers/app_server': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Application server pinged';
                };
            },
            { command: string }
        >;
    }>;
    '/services/{id}/gameservers/backups/database': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: 'Database backup will be restored.';
                };
            },
            { database: string; timestamp: string }
        >;
    }>;
    '/services/{id}/gameservers/backups/gameserver': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: 'Game server backup will be restored.';
                };
            },
            { folder: string; backup: string }
        >;
    }>;
    '/services/{id}/gameservers/ftp/password': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'The ftp password has been changed';
                };
            },
            { password: string }
        >;
    }>;
    '/services/{id}/gameservers/file_server/bookmarks': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    bookmarks: Array<string>;
                };
            };
        }>;
    }>;
    '/services/{id}/gameservers/file_server/copy': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'File or directory has been copied';
                };
            },
            { source_path: string; target_path: string; target_name: string }
        >;
    }>;
}
