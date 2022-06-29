import axios from 'axios';
import { readFileSync } from 'fs';
import { setupCache, AxiosCacheInstance } from 'axios-cache-interceptor';

import type { URLs } from '../routes';
import type { Config } from '../types/config';
import type { RequestData } from '../types/url';
import type { ParamsRecord } from '../types/path';

// Shorten console function names
const { log } = console;

// Get version from package.json
const { version } = JSON.parse(readFileSync('./package.json', 'utf8')) as {
    version: string;
};

/**
 * NitrApi request manager
 * @param token The token to use for bearer auth requests
 * @param config The config for NitrApi
 * @returns The NitrApi instance
 *
 * @github https://github.com/nitradojs/nitrado.js
 * @bugs https://github.com/nitradojs/nitrado.js/issues
 * @official_nitrado_docs https://doc.nitrado.net/
 * @author Copyright (C) 2022 cainthebest & Contributors
 * @license GNU General Public License v3.0
 */

export const NitrApi = (token?: string, config?: Config) => {
    // Set the start time of the function
    const functionStartTime = Date.now();

    // Debug mode. Default: false
    const debug: boolean = config?.debug ?? false;

    // Enable caching. Default: false
    const cache: boolean = config?.cache ?? false;

    // TTL in seconds. Default: 60
    // If cache is disabled this value is set to 0
    const ttl: number = cache
        ? config?.cacheOptions?.ttl
            ? config.cacheOptions.ttl * 1000
            : 60 * 1000
        : 0;

    // HTTP methods to use for cache. Default: ['get']
    const methods: Array<'get' | 'post' | 'put' | 'delete'> = config
        ?.cacheOptions?.methods ?? ['get'];

    // Return cached data (possibly expired) if the request fails. Default: false
    const serveStaleIfError: boolean =
        config?.cacheOptions?.serveStaleIfError ?? false;

    // Create a axios request with base URL & headers
    const request = axios.create({
        baseURL: 'https://api.nitrado.net',
        headers: {
            ContentType: 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
            'User-Agent': `nitrado.js/${version}`,
        },
    }) as AxiosCacheInstance;

    // Setup a cache for the instance
    setupCache(request, {
        ttl,
        methods,
        staleIfError: serveStaleIfError,
    });

    /**
     * Perform HTTP requests to a url on the Nitrado API
     * @param url The endpoint to perform the request on
     * @param params The parameters to pass to the endpoint string
     * @returns The response from the endpoint or error
     */
    const path = <
        URLString extends keyof URLs,
        Params extends ParamsRecord<URLString>,
    >(
        url: URLString,
        params: Params,
    ) => {
        // Replace all mustache tags with their respective values
        const urlString = url.replace(
            /\{([^}]+)\}/g,
            (_: string, param: keyof Params) =>
                params[param] || `{${String(param)}}`,
        );

        // These are what makes the actual HTTP requests using axios
        const handlers = {
            get: (data?: RequestData) => {
                debug &&
                    log(
                        `[nitrado.js] :: NitrApi :: Method: GET :: Requested endpoint: ${urlString}`,
                    );

                return request.get(urlString, { data });
            },
            post: (data?: RequestData) => {
                debug &&
                    log(
                        `[nitrado.js] :: NitrApi :: Method: POST :: Requested endpoint: ${urlString}`,
                    );

                return request.post(urlString, { data });
            },
            put: (data?: RequestData) => {
                debug &&
                    log(
                        `[nitrado.js] :: NitrApi :: Method: PUT :: Requested endpoint: ${urlString}`,
                    );

                return request.put(urlString, { data });
            },
            delete: (data?: RequestData) => {
                debug &&
                    log(
                        `[nitrado.js] :: NitrApi :: Method: DELETE :: Requested endpoint: ${urlString}`,
                    );

                return request.delete(urlString, { data });
            },
        } as URLs[URLString];

        // Return the handler for the given method
        return handlers;
    };

    debug &&
        request.interceptors.response.use(
            (response) => {
                log(
                    `[nitrado.js] :: NitrApi :: Response received from: ${
                        response.cached
                            ? `Cache_ID: ${response.id}`
                            : response.config.url
                    }`,
                );

                log(
                    `[nitrado.js] :: NitrApi :: Request completed in ${
                        Date.now() - functionStartTime
                    }ms`,
                );
                return response;
            },
            (error) => {
                log(`[nitrado.js] :: NitrApi :: API ERROR :: ${error}`);
                return Promise.reject(error);
            },
        );

    return {
        path,
    };
};

const api = NitrApi('', {
    debug: true,
    cache: true,
    cacheOptions: { ttl: 60 },
});
api.path('/ping', {})
    .get()
    .then((response) => {
        log(response.cached ? 'Cached' : 'Not cached');
        api.path('/ping', {})
            .get()
            .then((response) => log(response.cached ? 'Cached' : 'Not cached'))
            .catch(() => log('error catch'));
    })
    .catch(() => log('error catch'));
