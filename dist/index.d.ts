import { URLs } from './interface/urls';
import { ParamsRecord } from './types/path';
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
export declare const NitrApi: (token?: string | undefined) => {
    path: <URLString extends keyof import("./interface/api/global").Global | keyof import("./interface/api/oauth2").OAuth2 | keyof import("./interface/api/registration").Registration | keyof import("./interface/api/user").User | keyof import("./interface/api/service").Service | "/services/{id}/bouncers" | keyof import("./interface/api/cloud_server").Cloud_Server | keyof import("./interface/api/cloud_server_apps").Cloud_Server_Apps | "/company/stats" | keyof import("./interface/api/domain").Domain, Params extends ParamsRecord<URLString, Record<string, string>>>(url: URLString, params: Params) => URLs[URLString];
};
