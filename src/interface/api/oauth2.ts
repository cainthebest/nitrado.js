import { URL, RequestResponse } from '../../types/url';

export interface OAuth2 {
    '/token/sub': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        token: {
                            access_token: string;
                            token_type: string;
                            expires_in: number;
                            scope: string;
                        };
                    };
                };
            },
            {
                scope?: string;
                expires_in?: number;
                service_id?: number;
                user_id?: number;
            }
        >;
    }>;

    '/token/long_life_token': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        token: {
                            access_token: string;
                            refresh_token: string;
                            token_type: string;
                            expires_in: number;
                            scope: string;
                        };
                    };
                };
            },
            {
                token: string;
                client_id: string;
                client_secret: string;
                description: string;
                scope?: string;
                service_id?: number;
            }
        >;
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    tokens: Array<string>;
                };
            };
        }>;
    }>;

    '/token/long_life_token/{id}': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The access token has been deleted.';
            };
        }>;
    }>;

    '/token': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: {
                        id: number;
                        user: {
                            id: number;
                            username: string;
                        };
                        expires_at: string;
                        valid_until: string;
                        scopes: Array<string>;
                        two_factor_method: string;
                        employee: boolean;
                    };
                };
            };
        }>;
    }>;
}
