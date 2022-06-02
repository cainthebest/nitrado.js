import { URL, RequestResponse } from '../../../types/url';

export interface Verify {
    '/user/verify_country_and_state': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: unknown;
            },
            {
                country?: string;
                state?: string;
            }
        >;
    }>;
}
