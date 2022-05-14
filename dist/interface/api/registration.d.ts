import { URL, RequestResponse } from '../../types/url';
export interface Registration {
    '/registration': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    registration: {
                        google_recaptcha: {
                            enabled: boolean;
                            key: string;
                        };
                    };
                };
            };
        }>;
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    registration: {
                        user: {
                            id: number;
                        };
                        oauth: {
                            access_token: string;
                            refresh_token: string;
                            expires_in: number;
                            scope: string;
                        };
                    };
                };
            };
        }, {
            client_id: string;
            client_secret: string;
            recaptcha?: string;
            username: string;
            email: string;
            password: string;
            currency?: string;
            language?: string;
            timezone?: string;
        }>;
    }>;
    '/registration/activate': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The user has been activated successfully.';
            };
        }, {
            code: string;
            email: string;
        }>;
    }>;
}
