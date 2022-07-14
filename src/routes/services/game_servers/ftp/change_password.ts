import { URL, RequestResponse } from '../../../../types/url';

export interface ChangeFTPPassword {
    // Catogory: Gameserver/FTP
    // Name: Change FTP password
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-FTPPassword
    // URL: https://api.nitrado.net/services/{id}/gameservers/ftp/password
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/ftp/password': URL<{
        post: RequestResponse<
            {
                status: 'success';
                message: string;
            },
            { password: string }
        >;
    }>;
}
