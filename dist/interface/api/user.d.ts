import { URL, RequestResponse } from '../../types/url';
export interface User {
    '/user': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: string;
                    ttl: number;
                };
            };
        }, {
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
        }>;
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
    '/countries/states': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    states: Record<string, string>;
                };
            };
        }>;
    }>;
    '/countries': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    countries: Record<string, string>;
                };
            };
        }>;
    }>;
    '/user/account_overview': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    account_overview: {
                        from: string;
                        end: string;
                        payments: Array<{
                            id: number;
                            invoice_id: unknown;
                            service_id: number;
                            switched_service_id: unknown;
                            donation: unknown;
                            date: string;
                            method: string;
                            duration: number;
                            type: string;
                            amount: number;
                            currency: string;
                            ip: string;
                            refundable: boolean;
                            provider_fee: unknown;
                            last_status: unknown;
                        }>;
                    };
                };
            };
        }>;
    }>;
    '/user/token': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    token: string;
                    ttl: number;
                };
            };
        }, {
            password: string;
        }>;
    }>;
    '/user/language': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    language: string;
                };
            };
        }, {
            language: string;
        }>;
    }>;
    '/user/verify_country_and_state': URL<{
        get: RequestResponse<{
            status: '200';
            body: unknown;
        }, {
            country?: string;
            state?: string;
        }>;
    }>;
    '/voucher/redeem': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The voucher has been redeemed successful.';
            };
        }, {
            code: string;
        }>;
    }>;
}
