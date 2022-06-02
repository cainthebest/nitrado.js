import { URL, RequestResponse } from '../../../types/url';

export interface User {
    '/user': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        token: string;
                        ttl: number;
                    };
                };
            },
            {
                token: string;
                password?: string;
                timezone?: string;
                donations?: string;
                profile?: {
                    name?: string;
                    street?: string;
                    postcode?: string;
                    city?: string;
                    country?: string;
                    state?: string;
                    newsletter?: boolean;
                };
            }
        >;
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    user: {
                        user_id: number;
                        username: string;
                        activated: boolean;
                        timezone: string;
                        email: string;
                        credit: number;
                        currency: string;
                        registered: string;
                        language: string;
                        avatar: string;
                        donations: string;
                        phone: {
                            number: string;
                            country_code: string;
                            verified: boolean;
                        };
                        two_factor: Array<string>;
                        profile: {
                            name: string;
                            street: string;
                            postcode: string;
                            city: string;
                            country: string;
                            state: string;
                            country_and_state_verified: boolean;
                            newsletter: boolean;
                        };
                        permissions: Array<string>;
                        employee: boolean;
                        partner_id: number;
                    };
                };
            };
        }>;
    }>;
}
