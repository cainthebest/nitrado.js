import { URL, RequestResponse } from '../../../../types/url';

export interface InstallPackage {
    // Catogory: Gameserver/Package
    // Name: Install package
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-PostServicesIdGameserversPackagesInstall
    // URL: https://api.nitrado.net/services/{id}/gameservers/packages/install
    // Method: POST
    // Status: 200
    '/services/{id}/gameservers/packages/install': URL<{
        post: RequestResponse<
            { data: unknown },
            { package: string; version?: string }
        >;
    }>;
}
