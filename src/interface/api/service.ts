import { URL, RequestResponse } from '../../types/url';

export interface Service {
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

    '/services/{id}/cancel': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        status: 'success';
                        message: 'The server will be canceled now.';
                    };
                };
            },
            {
                delete_instantly?: boolean;
            }
        >;
    }>;
    '/services/{id}/auto_extend': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    auto_extend: Array<{
                        id: number;
                        name: string;
                        active: boolean;
                        description: string;
                        available: boolean;
                        payment_method: string;
                        rental_times: Record<string, number>;
                    }>;
                };
            };
        }>;
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: string;
                };
            },
            { auto_extend_id: number; rental_time: number }
        >;
    }>;
    '/services/{id}/subdomain': URL<{
        put: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Changed subdomain.';
                };
            },
            {
                domain_id: number;
                subdomain: string;
            }
        >;
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Deleted subdomain.';
            };
        }>;
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: {
                    subdomain: string;
                    domain: string;
                    fqdn: string;
                    domain_id: number;
                };
            };
        }>;
    }>;
    '/services/{id}/knowledge_base': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    articles: Array<{
                        title: string;
                        url: string;
                        game: string;
                        characteristic: string;
                    }>;
                };
            },
            { characteristic?: string }
        >;
    }>;
    '/services/{id}/subdomain/domains': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    domains: Array<{
                        name: string;
                        id: number;
                    }>;
                };
            };
        }>;
    }>;
    '/services/{id}/sale_price': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    sale_price: {
                        price: number;
                        currency: string;
                        remaining_duration: number;
                    };
                };
            };
        }>;
    }>;
    '/services/{id}/logs': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        current_page: number;
                        logs_per_page: number;
                        page_count: number;
                        log_count: number;
                        logs: Array<{
                            user: string;
                            category: string;
                            severity: string;
                            message: string;
                            created_at: string;
                            admin: boolean;
                        }>;
                    };
                };
            },
            { page?: number }
        >;
    }>;
    '/services/bulk_notifications': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        notifications: Record<
                            string,
                            Array<{
                                id: number;
                                service_id: number;
                                type: string;
                                level: string;
                                error_id: number;
                                dismissed: boolean;
                                message: string;
                                message_bbcode: string;
                                message_long: string;
                                message_long_bbcode: string;
                                actions: Array<unknown>;
                                data: Record<string, string>;
                                created_at: string;
                                created_at_timestamp: number;
                                lifetime: boolean;
                            }>
                        >;
                    };
                };
            },
            { service_ids: string }
        >;
    }>;
    '/services/{id}/notifications': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        notifications: Array<{
                            id: number;
                            service_id: number;
                            type: string;
                            level: string;
                            error_id: boolean;
                            dismissed: boolean;
                            message: string;
                            data: Record<string, string>;
                            created_at: string;
                            created_at_timestamp: number;
                            lifetime: boolean;
                        }>;
                    };
                };
            },
            { include_dismissed?: boolean }
        >;
    }>;
}
