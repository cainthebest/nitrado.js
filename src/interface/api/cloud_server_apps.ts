import { URL, RequestResponse } from '../../types/url';

export interface Cloud_Server_Apps {
    '/services/{id}/cloud_servers/apps': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    apps: Array<{
                        app_name: string;
                        app_type: string;
                        description: string;
                        status: string;
                        systemd_path: string;
                        systemd_config: string;
                        systemd_modified: boolean;
                        cmd: string;
                        default_cmd: string;
                        parsed_cmd: string;
                        parameters: Record<string, string>;
                        configurations: Record<string, string>;
                    }>;
                };
            };
        }>;
        post: RequestResponse<
            {
                status: '200';
                body: never;
            },
            { app_type: string; app_name: string; ports?: unknown }
        >;
    }>;
    '/services/{id}/cloud_servers/apps/{app_name}': URL<{
        put: RequestResponse<
            {
                status: '200';
                body: never;
            },
            { cmd: string; parameters: unknown }
        >;
        delete: RequestResponse<{
            status: '200';
            body: never;
        }>;
    }>;
    '/services/{id}/cloud_servers/apps/{app_name}/restart': URL<{
        post: RequestResponse<{
            status: '200';
            body: never;
        }>;
    }>;
    '/services/{id}/cloud_servers/apps/{app_name}/stop': URL<{
        post: RequestResponse<{
            status: '200';
            body: never;
        }>;
    }>;
    '/services/{id}/cloud_servers/apps/available': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    apps: Array<{
                        app_type: string;
                        category: string;
                        description: string;
                        minimum_requirements: Record<string, number>;
                        supports_ip_binding: boolean;
                        ports: Array<{
                            name: string;
                            description: string;
                            recommended: number;
                        }>;
                    }>;
                };
            };
        }>;
    }>;
    '/services/{id}/cloud_servers/apps/{app_name}/update': URL<{
        get: RequestResponse<{
            status: '200';
            body: never;
        }>;
    }>;
}
