import { URL, RequestResponse } from '../../../types/url';

export interface Redeem {
    '/voucher/redeem': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    message: 'The voucher has been redeemed successful.';
                };
            },
            {
                code: string;
            }
        >;
    }>;
}
