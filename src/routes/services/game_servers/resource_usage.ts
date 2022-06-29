import { URL, RequestResponse } from '../../../types/url';

export interface RestoreDatabase {
    // Catogory: Gameserver
    // Name: Gameserver details
    // Official Documentation: https://doc.nitrado.net/#api-Global-GetMaintenance
    // URL: https://api.nitrado.net/maintenance
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/stats': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        stats: {
                            currentPlayers: Array<Array<number>>;
                            maxPlayers: Array<Array<number>>;
                            cpuUsage: Array<Array<number>>;
                            memoryUsage: Array<Array<number>>;
                        };
                    };
                };
            },
            { hours?: number }
        >;
    }>;
}
