import { URL, RequestResponse } from '../../../../types/url';

export interface ListPackages {
    // Catogory: Gameserver/Package
    // Name: List packages
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GetServicesIdGameserversPackages
    // URL: https://api.nitrado.net/services/{id}/gameservers/packages
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/packages': URL<{
        post: RequestResponse<{
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
        }>;
    }>;
}
