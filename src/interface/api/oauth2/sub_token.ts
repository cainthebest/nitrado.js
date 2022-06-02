import { URL, RequestResponse } from '../../../types/url';

// OAuth_2 - Create a sub-token
// Docs: https://doc.nitrado.net/#api-OAuth_2-CreateSubToken
export interface SubToken {
    '/token/sub': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        token: {
                            access_token: string;
                            token_type: string;
                            expires_in: number;
                            scope: string;
                        };
                    };
                };
            },
            {
                scope?: string;
                expires_in?: number;
                service_id?: number;
                user_id?: number;
            }
        >;
    }>;
}
