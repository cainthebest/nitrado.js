import { URL, RequestResponse } from '../../../types/url';

export interface KnowledgeBase {
    '/services/{id}/knowledge_base': URL<{
        get: RequestResponse<
            {
                status: '200';
                body: {
                    status: 'success';
                    articles: Array<{
                        title: string;
                        url: string;
                        game: string;
                        characteristic: string;
                    }>;
                };
            },
            { characteristic?: string }
        >;
    }>;
}
