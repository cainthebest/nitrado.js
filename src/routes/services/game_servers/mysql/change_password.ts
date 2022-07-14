import { URL, RequestResponse } from '../../../../types/url';

export interface ChangeDBPassword {
    // Catogory: Gameserver/MySQL
    // Name: Change database password
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-MySQLPassword
    // URL: https://api.nitrado.net/services/{id]/gameservers/mysql/password
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/mysql/password': URL<{
        post: RequestResponse<
            {
                status: 'success';
                message: string;
            },
            { password: string }
        >;
    }>;
}
