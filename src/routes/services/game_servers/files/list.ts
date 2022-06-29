import { URL, RequestResponse } from '../../../../types/url';

export interface Delete {
    // Catogory: Gameserver
    // Name: Gameserver details
    // Official Documentation: https://doc.nitrado.net/#api-Global-GetMaintenance
    // URL: https://api.nitrado.net/maintenance
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/file_server/list': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        entries: Array<{
                            type: string;
                            path: string;
                            name: string;
                            size: number;
                            owner: string;
                            group: string;
                            chmod: string;
                            created_at: number;
                            modified_at: number;
                            accessed_at?: number;
                        }>;
                    };
                };
            },
            { dir?: string; search?: string }
        >;
    }>;
}
