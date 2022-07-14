import { URL, RequestResponse } from '../../../../types/url';

export interface ListFiles {
    // Catogory: Gameserver/Files
    // Name: List files
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesList
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/list
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/file_server/list': URL<{
        get: RequestResponse<
            {
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
            },
            { dir?: string; search?: string }
        >;
    }>;
}
