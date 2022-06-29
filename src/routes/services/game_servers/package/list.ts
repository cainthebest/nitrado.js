import { URL, RequestResponse } from '../../../../types/url';

export interface RestoreDatabase {
    // Catogory: Gameserver
    // Name: Gameserver details
    // Official Documentation: https://doc.nitrado.net/#api-Global-GetMaintenance
    // URL: https://api.nitrado.net/maintenance
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/packages': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                packages: {
                    sourcemod: {
                        description: string;
                        status: string;
                        version: string;
                        patch_id: string;
                        patches: Array<
                            Record<
                                string,
                                {
                                    version: string;
                                    supported_packages: null | Array<unknown>;
                                    retired: boolean;
                                }
                            >
                        >;
                        dependencies: Array<unknown>;
                    };
                };
            };
        }>;
    }>;
}
