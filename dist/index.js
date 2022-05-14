"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NitrApi = void 0;
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
const axios_1 = __importDefault(require("axios"));
const fs_1 = require("fs");
const { version } = JSON.parse((0, fs_1.readFileSync)('package.json', 'utf-8'));
/**
 * NitrApi request manager
 * @param token The token to use for bearer auth requests
 * @returns The NitrApi instance
 *
 * @github https://github.com/cainthebest/nitrado.js
 * @bugs https://github.com/cainthebest/nitrado.js/issues
 * @official_nitrado_docs https://doc.nitrado.net/
 * @author Copyright (C) 2022 cainthebest & Contributors
 * @license GNU General Public License v3.0
 */
const NitrApi = (token) => {
    const request = axios_1.default.create({
        baseURL: 'https://api.nitrado.net',
        headers: {
            ContentType: 'application/json',
            Authorization: token ? 'Bearer ' + token : '',
            'User-Agent': `nitrado.js/${version}`,
        },
    });
    /**
     * Perform HTTP requests to a url on the Nitrado API
     * @param url The endpoint to perform the request on
     * @param params The parameters to pass to the endpoint string
     * @returns The response from the endpoint or error
     */
    const path = (url, params) => {
        // Replace all mustache tags with their respective values
        const urlString = url.replace(/\{([^}]+)\}/g, (_, param) => params[param] || `{${param}}`);
        // These are what makes the actual HTTP requests using axios
        const handlers = {
            /* eslint-disable  @typescript-eslint/no-explicit-any */
            get: (data) => request.get(urlString, { data }),
            post: (data) => request.post(urlString, { data }),
            put: (data) => request.put(urlString, { data }),
            delete: (data) => request.delete(urlString, { data }),
            // options: (data?: any) => request.options(urlString, { data }),
            /* eslint-enable  @typescript-eslint/no-explicit-any */
        };
        return handlers;
    };
    return {
        path,
    };
};
exports.NitrApi = NitrApi;
