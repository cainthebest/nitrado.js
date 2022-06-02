import { URL, RequestResponse } from '../../../types/url';

export interface Token {
    '/user/token': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        token: string;
                        ttl: number;
                    };
                };
            },
            {
                password: string;
            }
        >;
    }>;
}
