import { URL, RequestResponse } from '../../../../types/url';

export interface Settings {
    // Catogory: Gameserver/settings
    // URL: https://api.nitrado.net/services/{id}/gameservers/settings

    '/services/{id}/gameservers/settings': URL<{
        // Name: Reset settings
        // Official Documentation: https://doc.nitrado.net/#api-Gameserver-DeleteSetting
        // Method: DELETE
        // Status: 200
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;

        // Name: Update settings
        // Official Documentation: https://doc.nitrado.net/#api-Gameserver-UpdateSetting
        // Method: POST
        // Status: 200
        post: RequestResponse<
            {
                status: 'success';
                data: {
                    settings: Record<string, unknown>;
                };
            },
            { category: string; key: string; value: string }
        >;
    }>;
}
