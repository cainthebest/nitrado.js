import { URL, RequestResponse } from '../../../../types/url';

export interface Bookmarks {
    // Catogory: Gameserver/Files
    // Name: List bookmarks
    // Official Documentation: https://doc.nitrado.net/#api-Gameserver-GameserverFilesBookmarks
    // URL: https://api.nitrado.net/services/{id}/gameservers/file_server/bookmarks
    // Method: GET
    // Status: 200
    '/services/{id}/gameservers/file_server/bookmarks': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    bookmarks: Array<string>;
                };
            };
        }>;
    }>;
}
