export type Config = {
    /**
     * Enable caching for the instance
     *
     * If false all cache options are ignored and no cache is created
     *
     * It is only recommended to use caching if you are experiencing issues with rate limiting or you intend to hanlde errors with serving the cache when the api is unavailable
     *
     * @default false
     */
    cache?: boolean;
    /**
     * Cache options
     */
    cacheOptions?: {
        /**
         * The time until the cache expires in milliseconds
         *
         * If a function is used, it will receive the complete response and waits to return a TTL value
         *
         * @default 1000 * 60 * 5 // 5 minutes
         */
        ttl?: number;
        /**
         * HTTP methods to use for cache
         *
         * @default ['get']
         */
        methods?: Array<'get' | 'post' | 'put' | 'delete'>;
        /**
         * Enables cache to be returned if the response comes with a error status
         *
         * This also enables the cache to be preserved over with a infinite lifetime till the next response is received
         *
         * @default true
         */
        staleIfError?: boolean;
    };
};
