import { URL, RequestResponse } from '../../../types/url';

export interface Cancel {
    '/services/{id}/cancel': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        status: 'success';
                        message: 'The server will be canceled now.';
                    };
                };
            },
            {
                delete_instantly?: boolean;
            }
        >;
    }>;
}
