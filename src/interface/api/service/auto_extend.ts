import { URL, RequestResponse } from '../../../types/url';

export interface AutoExtend {
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
}
