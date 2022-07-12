import { URL, RequestResponse } from '../../../../types/url';

export interface Sets {
    // Catogory: Gameserver/settings
    // URL: https://api.nitrado.net/services/{id}/gameservers/settings/sets

    '/services/{id}/gameservers/settings/sets': URL<{
        // Name: Create set
        // Official Documentation: https://doc.nitrado.net/#api-Gameserver-SettingSetCreate
        // Method: POST
        // Status: 200
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: string;
                };
            },
            { name?: string }
        >;

        // Name: Delete set
        // Official Documentation: https://doc.nitrado.net/#api-Gameserver-SettingSetDelete
        // Method: DELETE
        // Status: 200
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;

        // Name: List all sets
        // Official Documentation: https://doc.nitrado.net/#api-Gameserver-SettingSetList
        // Method: GET
        // Status: 200
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    sets: Array<{
                        id: number;
                        name: string;
                        game: string;
                        data: Record<string, unknown>;
                        datetime: string;
                        backup_id: null | unknown;
                    }>;
                };
            };
        }>;
    }>;
}
