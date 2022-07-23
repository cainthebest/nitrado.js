import { URL, RequestResponse } from '../../types/url';

export interface SubToken {
    // Catogory: Tokens
    // Name: Create sub token
    // Official Documentation: https://doc.nitrado.net/#api-OAuth_2-CreateSubToken
    // URL: https://api.nitrado.net/token/sub
    // Method: POST
    // Status: 200
    '/token/sub': URL<{
        post: RequestResponse<
            {
                status: 'success';
                data: {
                    token: {
                        access_token: string;
                        token_type: string;
                        expires_in: number;
                        scope: string;
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
