import { URL, RequestResponse } from '../../../../types/url';

export interface RestoreSet {
    // Catogory: Gameserver/settings
    // Name: Restore set
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-SettingSetRestore
    // URL: https://api.nitrado.net/services/{id}/gameservers/settings/sets/{set_id}/restore
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/settings/sets/{set_id}/restore': URL<{
        post: RequestResponse<{
            status: 'success';
            message: string;
        }>;
    }>;
}
