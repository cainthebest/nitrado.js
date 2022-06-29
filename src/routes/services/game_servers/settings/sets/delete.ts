import { URL, RequestResponse } from '../../../../../types/url';

export interface RestoreDatabase {
    // Catogory: Gameserver
    // Name: Gameserver details
    // Official Documentation: https://doc.nitrado.net/#api-Global-GetMaintenance
    // URL: https://api.nitrado.net/maintenance
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/settings/sets/{set_id}': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    status: 'success';
                    message: String;
                };
            };
        }>;
    }>;
}
