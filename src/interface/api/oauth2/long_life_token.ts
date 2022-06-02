import { URL, RequestResponse } from '../../../types/url';

// OAuth_2 - long-life token
export interface LongLifeToken {
    // OAuth_2 - Create long-life token
    // Docs: https://doc.nitrado.net/#api-OAuth_2-CreateLongLifeToken
    '/token/long_life_token': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        token: {
                            access_token: string;
                            refresh_token: string;
                            token_type: string;
                            expires_in: number;
                            scope: string;
                        };
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
        // OAuth_2 - List long-life tokens
        // Docs: https://doc.nitrado.net/#api-OAuth_2-ListLongLifeTokens
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    tokens: Array<string>;
                };
            };
        }>;
    }>;

    // OAuth_2 - Delete long-life token
    // Docs: https://doc.nitrado.net/#api-OAuth_2-DeleteLongLifeToken
    '/token/long_life_token/{id}': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The access token has been deleted.';
            };
        }>;
    }>;
}
