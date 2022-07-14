import { URL, RequestResponse } from '../../../../types/url';

export interface PackageReinstall {
    // Catogory: Gameserver/Package
    // Name: Reinstall package
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-PutServicesIdGameserversPackagesReinstall
    // URL: https://api.nitrado.net/services/{id}/gameservers/packages/reinstall
    // Method: PUT
    // Status: 200
    '/services/{id}/gameservers/packages/reinstall': URL<{
        put: RequestResponse<
            {
                body: unknown;
            },
            { package: string; version?: string }
        >;
    }>;
}
