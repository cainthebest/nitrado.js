import { URL, RequestResponse } from '../../../types/url';

export interface Services {
    '/services': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    services: Array<{
                        id: number;
                        location_id: number;
                        status: string;
                        websocket_token: string;
                        user_id: number;
                        comment: string;
                        auto_extension: boolean;
                        auto_extension_duration: unknown;
                        auto_extension_external: boolean;
                        type: string;
                        type_human: string;
                        managedroot_id: unknown;
                        details: {
                            address: string;
                            name: string;
                            game: string;
                            portlist_short: string;
                            folder_short: string;
                            slots: number;
                        };
                        start_date: string;
                        suspend_date: string;
                        delete_date: string;
                        username: string;
                        roles: Array<string>;
                    }>;
                };
            };
        }>;
    }>;
    '/services/{id}': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    service: {
                        id: number;
                        location_id: number;
                        status: string;
                        websocket_token: string;
                        user_id: number;
                        username: string;
                        auto_extension: boolean;
                        auto_extension_duration: unknown;
                        auto_extension_external: boolean;
                        type: string;
                        type_human: string;
                        details: {
                            address: string;
                            name: string;
                            game: string;
                            portlist_short: string;
                            folder_short: string;
                            slots: number;
                        };
                        start_date: number;
                        suspend_date: number;
                        delete_date: number;
                        arguments: {
                            startgame: string;
                            startport: string;
                        };
                        roles: Array<string>;
                    };
                };
            };
        }>;
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The server will be deleted in the next minutes.';
            };
        }>;
    }>;
}
