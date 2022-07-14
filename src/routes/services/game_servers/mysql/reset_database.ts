import { URL, RequestResponse } from '../../../../types/url';

export interface ResetDatabase {
    // Catogory: Gameserver/MySQL
    // Name: Reset database
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-MySQLReset
    // URL: https://api.nitrado.net/services/{id}/gameservers/mysql/reset
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/mysql/reset': URL<{
        post: RequestResponse<
            {
                status: 'success';
                message: string;
            },
            { password: string }
        >;
    }>;
}
