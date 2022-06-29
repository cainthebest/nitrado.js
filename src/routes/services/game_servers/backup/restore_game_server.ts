import { URL, RequestResponse } from '../../../../types/url';

export interface RestoreGameserver {
    // Catogory: Gameserver/Backup
    // Name: Restore gameserver
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-RestoreGameserverBackup
    // URL: https://api.nitrado.net/services/{id}/gameservers/backups/gameserver
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/backups/gameserver': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: string;
                };
            },
            { folder: string; backup: string }
        >;
    }>;
}
