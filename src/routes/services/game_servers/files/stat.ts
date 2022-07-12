import { URL, RequestResponse } from '../../../../types/url';

export interface Stats {
    // Catogory: Gameserver/Files
    // Name: Get file stats
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesStat
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/stat
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/file_server/stat': URL<{
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
                            accessed_at: number;
                        }>;
                    };
                };
            },
            { files: Array<string> }
        >;
    }>;
}
