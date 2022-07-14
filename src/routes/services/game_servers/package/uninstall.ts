import { URL, RequestResponse } from '../../../../types/url';

export interface PackageUninstall {
    // Catogory: Gameserver/Package
    // Name: Uninstall package
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-DeleteServicesIdGameserversPackagesUninstall
    // URL: https://api.nitrado.net/services/{id]/gameservers/packages/uninstall
    // Method: DELETE
    // Status: 200
    '/services/{id}/gameservers/packages/uninstall': URL<{
        delete: RequestResponse<
            {
                body: unknown;
            },
            { package: string }
        >;
    }>;
}
