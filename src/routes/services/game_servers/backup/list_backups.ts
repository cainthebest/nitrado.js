import { URL, RequestResponse } from '../../../../types/url';

export interface ListBackups {
    // Catogory: Gameserver/Backup
    // Name: List gameserver backups
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-BackupList
    // URL: https://api.nitrado.net/services/{id}/gameservers/backups
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/backups': URL<{
        get: RequestResponse<{
            status: 'success';
            data: {
                backups: {
                    gameserver: Record<
                        string,
                        Array<{
                            backup_type: string;
                            backup_timestamp: number;
                            backup_number: number;
                            backup_size: number;
                            backup_file_size: number;
                        }>
                    >;
                    database: Record<
                        string,
                        Array<{
                            backup_file: string;
                            backup_size: number;
                            backup_timestamp: number;
                        }>
                    >;
                };
            };
        }>;
    }>;
}
