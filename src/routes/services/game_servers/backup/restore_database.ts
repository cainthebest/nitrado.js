import { URL, RequestResponse } from '../../../../types/url';

export interface RestoreDatabase {
    // Catogory: Gameserver/Backup
    // Name: Restore database
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-RestoreDatabaseBackup
    // URL: https://api.nitrado.net/services/{id}/gameservers/backups/database
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/backups/database': URL<{
        post: RequestResponse<
            {
                status: 'success';
                data: string;
            },
            { database: string; timestamp: string }
        >;
    }>;
}
