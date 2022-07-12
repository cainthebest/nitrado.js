import { URL, RequestResponse } from '../../../types/url';

export interface ResourceUsage {
    // Catogory: Gameserver
    // Name: Get resource usage
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-Stats
    // URL: https://api.nitrado.net/services/{id}/gameservers/stats
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
