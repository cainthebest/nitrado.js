var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.ts
import axios from "axios";
import { readFileSync } from "fs";
var { version } = JSON.parse(readFileSync("package.json", "utf-8"));
var NitrApi = /* @__PURE__ */ __name((token) => {
  const request = axios.create({
    baseURL: "https://api.nitrado.net",
    headers: {
      ContentType: "application/json",
      Authorization: token ? "Bearer " + token : "",
      "User-Agent": `nitrado.js/${version}`
    }
  });
  const path = /* @__PURE__ */ __name((url, params) => {
    const urlString = url.replace(/\{([^}]+)\}/g, (_, param) => params[param] || `{${String(param)}}`);
    const handlers = {
      get: (data) => request.get(urlString, { data }),
      post: (data) => request.post(urlString, { data }),
      put: (data) => request.put(urlString, { data }),
      delete: (data) => request.delete(urlString, { data })
    };
    return handlers;
  }, "path");
  return {
    path
  };
}, "NitrApi");
export {
  NitrApi
};
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
