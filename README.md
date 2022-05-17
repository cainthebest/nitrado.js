> **NOTE** This project is not at a stable release, it's still in development. Please report any issues you encounter [here](https://github.com/cainthebest/nitrado.js/issues/new).

<div align="center">
  <a>
    <img src="https://cdn.discordapp.com/attachments/754460402729091212/964958946651693086/IMG_1775.png" alt="Logo"  height="250">
  </a>

  <p align="center">
    <br />
    <a href="https://github.com/cainthebest/nitrado.js/blob/master/CHANGELOG.md">
      Changelog
    </a>
    ·
    <a href="https://github.com/cainthebest/nitrado.js/issues/news">
      Report Bug
    </a>
    ·
    <a href="https://github.com/cainthebest/nitrado.js/issues/new">
      Request Feature
    </a>
  </p>
</div>

# Setup

## NodeJS

Please ensure you have Node 14 or above installed on your system. You can check with `node --version`. You can use a tool like [nvm](https://github.com/nvm-sh/nvm) if you have the incorrect version installed. We recommend Node 16/18.

## Installing

Run the following command in your project folder to install nitrado.js

```bash
npm install nitrado.js
```

# Get Started

## Importing 

If you are using TypeScript or ESM (import):

```js
import { NitrApi } from 'nitrado.js';
```

If you are using commonjs (require):

```js
const { NitrApi } = require('nitrado.js');
```

## Authenticating

We recommend storing your API token in a environment variable. The easiest way to do this is by using [dotenv](https://www.npmjs.com/package/dotenv). You can however just pass it in as a string.

You can [read the guide here](#getting-an-api-token) on how to get an API token.

  - ### dotenv
    ```js
    const api = NitrApi(process.env["NITRADO_TOKEN"]);
    ```

  - ### Passing it in
    ```js
    const api = NitrApi("REPLACE_ME");
    ```

## Making requests

The api object has a `path` function, this is how you can set what path you are making an api request too. Each path might be used for many different requests.

For example lets use the `/ping` route.

```js
const api = NitrApi(process.env["NITRADO_TOKEN"]);

const ping = api.path('/ping');
```

When we have the path we can then make a HTTP request to it. For example:

```js
const api = NitrApi(process.env["NITRADO_TOKEN"]);

const response = api.path('/ping').get();

response.then((data) => {
  console.log(data)
})
```

Becuase `nitrado.js` is fully type safe, intelli-sense will tell you all the possible paths and HTTP methods you can do!

## Param Paths

Some paths might have a parameter, for example the following route has the `id` parameter: `/services/{id}/bouncers`.

We can pass that in along side the path function, as always it's fully typesafe so intellisense will tell you what you need to pass in:

```js
api.path('/services/{id}/bouncers', { id: 'REPLACE_ME' })
```

## Passing in data to a request

On some endpoints we might need to pass in data to the request, for example the bouncers endpoint we saw previously. When we call `delete` on it we can pass in some data.

```js
api.path('/services/{id}/bouncers', { id: 'REPLACE_ME' })
    .delete({ ident: 'REPLACE_ME' })
```

# Getting an API Token

Unfortunately due to a bug in the non-US versions of the Nitrado websites you must use a VPN or proxy if you are outside of these locations.

When you are logged into the nitrado website, you can visit the following URL to generate your API token. https://server.nitrado.net/eng/developer/tokens

# Support

- ### Github Issues
  https://github.com/cainthebest/nitrado.js/issues/new

- ### Discord
  https://discord.gg/M4ZBSMKqug

# License

Distributed under the GPL-3.0 License. See [LICENSE.txt](./LICENSE.txt) for more information.
