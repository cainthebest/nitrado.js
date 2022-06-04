import { URL, RequestResponse } from '../../../types/url';

export interface Notifications {
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
