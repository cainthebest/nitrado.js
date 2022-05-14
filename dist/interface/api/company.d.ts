import { URL, RequestResponse } from '../../types/url';
export interface Company {
    '/company/stats': URL<{
        get: RequestResponse<{
            status: '200';
            body: {
                status: 'success';
                data: {
                    employee_count: number;
                    game_count: number;
                    location_count: number;
                    services: {
                        active: number;
                        total: number;
                    };
                    hardware: {
                        cpu_cores: number;
                        memory_gb: number;
                        storage_tb: number;
                    };
                };
            };
        }>;
    }>;
}
