import { URL, RequestResponse } from '../../../types/url';

export interface Language {
    '/user/language': URL<{
        post: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    data: {
                        language: string;
                    };
                };
            },
            {
                language: string;
            }
        >;
    }>;
}
