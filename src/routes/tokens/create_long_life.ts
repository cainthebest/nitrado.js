import { URL, RequestResponse } from '../../types/url';

export interface LongLife {
    // Catogory: Tokens
    '/token/long_life_token': URL<{
        // Name: Create long life token
        // Official Documentation: https://doc.nitrado.net/#api-OAuth_2-CreateLongLifeToken
        // URL: https://api.nitrado.net/token/long_life_token
        // Method: POST
        // Status: 200
        post: RequestResponse<
            {
                status: 'success';
                data: {
                    token: {
                        access_token: string;
                        refresh_token: string;
                        token_type: string;
                        expires_in: string;
                        scope: string;
                    };
                };
            },
            {
                token: string;
                client_id: string;
                client_secret: string;
                description: string;
                scope?: string;
                service_id?: number;
            }
        >;

        // Name: List long life tokens
        // Official Documentation: https://doc.nitrado.net/#api-OAuth_2-ListLongLifeTokens
        // URL: https://api.nitrado.net/token/long_life_token
        // Method: GET
        // Status: 200
        get: RequestResponse<{
            status: 'success';
            data: {
                tokens: Array<string>;
            };
        }>;
    }>;
}
