import { URL, RequestResponse } from '../../../../types/url';

export interface RestoreSettings {
    // Catogory: Gameserver/settings
    // Name: Restore settings to default
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-SettingDefaults
    // URL: https://api.nitrado.net/services/{id}/gameservers/settings/defaults
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/settings/defaults': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    settings: Record<string, unknown>;
                };
            };
        }>;
    }>;
}
