import { URL, RequestResponse } from '../../types/url';

export interface Domain {
    '/domain/contact': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        contact: {
                            handle: string;
                        };
                    };
                };
            },
            {
                contact: {
                    organization?: string;
                    first_name: string;
                    last_name: string;
                    email: string;
                    phone: string;
                    fax?: string;
                    street: string;
                    postcode: string;
                    city: string;
                    state: string;
                    country: string;
                };
            }
        >;
    }>;

    '/domain/{domain}/service': URL<{
        put: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Added domain to service.';
                };
            },
            { service_id: number }
        >;
    }>;
    '/domain/{domain}/zone': URL<{
        put: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Enabled successfully';
                };
            },
            { dnssec: string }
        >;
    }>;
    '/domain/{domain}/handle/{handle}': URL<{
        put: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
    '/domain/{domain}/nameserver': URL<{
        put: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Your specified nameserver has been set.';
                };
            },
            {
                nameserver1?: string;
                nameserver2?: string;
                nameserver3?: string;
                nameserver4?: string;
            }
        >;
    }>;
    '/domain/{domain}/check': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    check: {
                        domain: string;
                        free: boolean;
                        internal_transfer: boolean;
                    };
                };
            };
        }>;
    }>;
    '/domain/{domain}/auth_code': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: string;
            };
        }>;
    }>;
    '/domain/contact/{handle}': URL<{
        delete: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'The contact handle has been deleted successful.';
            };
        }>;
    }>;
    '/domain/{domain}/records': URL<{
        delete: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Deleted successfully';
                };
            },
            {
                name: string;
                type: string;
                content?: string;
            }
        >;
    }>;
    '/domain/{domain}/redirects': URL<{
        delete: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'Deleted successfully';
                };
            },
            { id: string }
        >;
    }>;
    '/domain/{domain}/info': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    info: {
                        domain: string;
                        created_at: string;
                        modified_at: string;
                        expires_at: string;
                        status: string;
                        transfer_lock: boolean;
                        auth_code: unknown;
                        auto_renew: string;
                        delegation: boolean;
                        owner_c: string;
                        admin_c: string;
                        tech_c: string;
                        bill_c: string;
                        ns1: string;
                        ns2: string | null;
                        ns3: string | null;
                        ns4: string | null;
                    };
                };
            };
        }>;
    }>;
    '/domain/{domain}/extend': URL<{
        post: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                message: 'Domain has been extended.';
            };
        }>;
    }>;
}
