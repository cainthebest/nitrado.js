/*
    Copyright (C) 2022 cainthebest <https://github.com/cainthebest> & Contributors

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
import axios from 'axios';
import { URLs } from './interface/urls';
import { Config } from './types/config';
import { ParamsRecord } from './types/path';

/**
 * NitrApi request manager
 * @param token The token to use for bearer auth requests
 * @param config The config for NitrApi
 * @returns The NitrApi instance
 *
 * @github https://github.com/cainthebest/nitrado.js
 * @bugs https://github.com/cainthebest/nitrado.js/issues
 * @official_nitrado_docs https://doc.nitrado.net/
 * @author Copyright (C) 2022 cainthebest & Contributors
 * @license GNU General Public License v3.0
 */

export const NitrApi = (token?: string, config?: Config) => {
    const request = axios.create({
        baseURL: 'https://api.nitrado.net',
        headers: {
            ContentType: 'application/json',
            Authorization: token ? `Bearer ${token}` : '',
            'User-Agent': config?.userAgent ? config.userAgent : 'nitrado.js',
        },
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
            /* eslint-disable  @typescript-eslint/no-explicit-any */
            get: (data?: any) => request.get(urlString, { data }),
            post: (data?: any) => request.post(urlString, { data }),
            put: (data?: any) => request.put(urlString, { data }),
            delete: (data?: any) => request.delete(urlString, { data }),
            // options: (data?: any) => request.options(urlString, { data }),
            /* eslint-enable  @typescript-eslint/no-explicit-any */
        } as URLs[URLString];

        return handlers;
    };

    return {
        path,
    };
};
