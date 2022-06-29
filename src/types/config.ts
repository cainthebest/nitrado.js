export type Config = {
    /**
     * Debug mode. Default: `false`
     */
    debug?: boolean;
    /**
     * Enable caching. Default: `false`
     */
    cache?: boolean;
    /**
     * Cache options
     */
    cacheOptions?: {
        /**
         * Cache TTL in seconds. Default: `60`
         */
        ttl?: number;
        /**
         * HTTP methods to use for cache. Default: `['get']`
         */
        methods?: Array<'get' | 'post' | 'put' | 'delete'>;
        /**
         * Return cached data (possibly expired) if the request fails. Default: `false`
         */
        serveStaleIfError?: boolean;
    };
};
