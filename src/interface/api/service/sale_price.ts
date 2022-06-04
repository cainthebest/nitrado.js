import { URL, RequestResponse } from '../../../types/url';

export interface SalePrice {
    '/services/{id}/sale_price': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    sale_price: {
                        price: number;
                        currency: string;
                        remaining_duration: number;
                    };
                };
            };
        }>;
    }>;
}
