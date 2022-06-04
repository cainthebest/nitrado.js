import { URL, RequestResponse } from '../../../types/url';

export interface Logs {
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
}
