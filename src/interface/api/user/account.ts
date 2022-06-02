import { URL, RequestResponse } from '../../../types/url';

export interface AccountOverview {
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
