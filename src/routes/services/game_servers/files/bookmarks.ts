import { URL, RequestResponse } from '../../../../types/url';

export interface Bookmarks {
    // Catogory: Gameserver
    // Name: Gameserver details
    // Official Documentation: https://doc.nitrado.net/#api-Global-GetMaintenance
    // URL: https://api.nitrado.net/maintenance
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/file_server/bookmarks': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    bookmarks: Array<string>;
                };
            };
        }>;
    }>;
}
