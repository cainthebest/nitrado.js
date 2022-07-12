import axios from 'axios';
import { setupCache } from 'axios-cache-interceptor';

import type { URLs } from '../routes';
import type { Config } from '../types/config';
import type { RequestData } from '../types/url';
import type { ParamsRecord } from '../types/path';
import type { AxiosCacheInstance } from 'axios-cache-interceptor';

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
    // Create a axios request with base URL & headers
    const request = axios.create({
        baseURL: 'https://api.nitrado.net',
        headers: {
            ContentType: 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
            'User-Agent': 'nitrado.js',
        },
    }) as AxiosCacheInstance;

    // Setup a cache for the instance if enabled
    config?.cache && setupCache(request, config?.cacheOptions);

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
        // Intercept the request and change the base url for oauth subdomain requests
        request.interceptors.request.use((config) => {
            // This is a workaround as '/token' exists on both subdomains
            // If '/token' is neeeded for oauth user will need to use '/oauth/token'
            url.startsWith('/oauth')
                ? url.startsWith('/oauth/token')
                    ? (url = url.split('/oauth')[1] as URLString) &&
                      (config.baseURL = 'https://oauth.nitrado.net')
                    : (config.baseURL = 'https://oauth.nitrado.net')
                : null;

            return config;
        });

        // Replace all mustache tags with their respective values
        const urlString = url.replace(
            /\{([^}]+)\}/g,
            (_: string, param: keyof Params) =>
                params[param] || `{${String(param)}}`,
        );

        // These are what makes the actual HTTP requests using axios
        const handlers = {
            get: (data?: RequestData) => request.get(urlString, { data }),
            post: (data?: RequestData) => request.post(urlString, { data }),
            put: (data?: RequestData) => request.put(urlString, { data }),
            delete: (data?: RequestData) => request.delete(urlString, { data }),
        } as URLs[URLString];

        return handlers;
    };

    return {
        path,
    };
};
