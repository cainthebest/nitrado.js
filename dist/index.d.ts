import { AxiosResponse } from 'axios';

interface Response {
    status: string;
    body?: unknown;
    headers?: Record<string, unknown>;
}
declare type ClientErrorStatus = '400' | '401' | '403' | '404' | '405' | '409' | '412' | '429';
declare type ServerErrorStatus = '500' | '502' | '503' | '504';
interface RequestError extends Response {
    status: ClientErrorStatus | ServerErrorStatus;
    body: {
        status: 'error';
        message: string;
        data?: unknown;
    };
}

declare type Method = 'get' | 'post' | 'put' | 'delete' | 'options';
declare type RequestResponse<ResponseData extends Response, RequestData extends Record<string, any> | false = false> = RequestData extends false ? (data?: any) => Promise<AxiosResponse<ResponseData>> : (data: RequestData) => Promise<AxiosResponse<ResponseData>>;
declare type URL<Methods extends {
    [Key in Method]?: RequestResponse<any, any>;
}> = Methods;

interface Countries {
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
}

interface Registration$1 {
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

interface LongLifeToken {
    '/token/long_life_token': URL<{
        post: RequestResponse<{
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
        }, {
            token: string;
            client_id: string;
            client_secret: string;
            description: string;
            scope?: string;
            service_id?: number;
        }>;
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
}

interface HealthCheck {
    '/ping': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}

interface Maintenance {
    '/maintenance': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    maintenance: {
                        cloud_backend: boolean;
                        domain_backend: boolean;
                        dns_backend: boolean;
                        pmacct_backend: boolean;
                    };
                };
            };
        }>;
    }>;
}

interface Version {
    '/version': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
}

declare type Global = HealthCheck & Maintenance & Version;

interface SubToken {
    '/token/sub': URL<{
        post: RequestResponse<{
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
        }, {
            scope?: string;
            expires_in?: number;
            service_id?: number;
            user_id?: number;
        }>;
    }>;
}

declare type OAuth2 = SubToken & LongLifeToken;

declare type Registration = Registration$1;

interface User$1 {
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
}

interface AccountOverview {
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
}

interface Token {
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
}

interface Language {
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
}

interface Verify {
    '/user/verify_country_and_state': URL<{
        get: RequestResponse<{
            status: '200';
            body: unknown;
        }, {
            country?: string;
            state?: string;
        }>;
    }>;
}

interface Redeem {
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

declare type User = User$1 & Countries & AccountOverview & Token & Language & Verify & Redeem;

declare type URLs = Global & OAuth2 & Registration & User;

declare type Config = {
    /**
     * The request user agent
     */
    userAgent?: string;
};

declare type ParamsRecord<URLString extends string, Params = Record<string, string>> = URLString extends `${infer Head}{${infer Parameter}}${infer Tail}` ? ParamsRecord<Tail, Params & {
    [P in Parameter]: string;
}> : Params;

/**
 * NitrApi request manager
 * @param token The token to use for bearer auth requests
 * @param config The config for NitrApi
 * @returns The NitrApi instance
 *
 * @github https://github.com/cainthebest/nitrado.js
 * @bugs https://github.com/cainthebest/nitrado.js/issues
 * @official_nitrado_docs https://doc.nitrado.net/
 * @author Copyright (C) 2022 cainthebest & Contributors
 * @license GNU General Public License v3.0
 */
declare const NitrApi: (token?: string, config?: Config) => {
    path: <URLString extends "/ping" | "/maintenance" | "/version" | "/token/sub" | keyof LongLifeToken | keyof Registration$1 | "/user" | keyof Countries | "/user/account_overview" | "/user/token" | "/user/language" | "/user/verify_country_and_state" | "/voucher/redeem", Params extends ParamsRecord<URLString, Record<string, string>>>(url: URLString, params: Params) => URLs[URLString];
};

export { Config, NitrApi, RequestError };
