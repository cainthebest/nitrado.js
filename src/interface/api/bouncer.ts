import { URL, RequestResponse } from '../../types/url';

export interface Bouncer {
    '/services/{id}/bouncers': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    bouncer: {
                        max_bouncer: number;
                        type: string;
                        bouncers: Array<{
                            ident: string;
                            password: string;
                            server: {
                                name: string;
                                port: number;
                            };
                            running_tasks: number;
                        }>;
                    };
                };
            };
        }>;
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Ident created.';
                };
            },
            { ident: string; password: string }
        >;
        delete: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Ident deleted.';
                };
            },
            { ident: string }
        >;
        put: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Password changed.';
                };
            },
            { ident: string; password: string }
        >;
    }>;
}
