import { URL, RequestResponse } from '../../types/url';

export interface DelLongLife {
    // Catogory: Tokens
    // Name: Delete long life token
    // Official Documentation: https://doc.nitrado.net/#api-OAuth_2-DeleteLongLifeToken
    // URL: https://api.nitrado.net/token/long_life_token/{id}
    // Method: DELETE
    // Status: 200
    '/token/long_life_token/{id}': URL<{
        delete: RequestResponse<
            {
                status: 'success';
                message: string;
            },
            {
                id: number;
            }
        >;
    }>;
}
