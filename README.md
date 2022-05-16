<div id="top"></div>

<!-- PROJECT SHIELDS -->

  <div align="center">

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

</div>

<!-- PROJECT LOGO -->

<br />
<div align="center">
  <a>
    <img src="https://cdn.discordapp.com/attachments/754460402729091212/964958946651693086/IMG_1775.png" alt="Logo"  height="250">
  </a>
<p align="center">
    <br />
    <a href="https://github.com/cainthebest/nitrado.js">Get Started</a>
    ·
    <a href="https://github.com/cainthebest/nitrado.js/issues">Report Bug</a>
    ·
    <a href="https://github.com/cainthebest/nitrado.js/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>

  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

This project is still in development.
It does not yet support all features of the official Nitrado API.

It is not recommended to use this project for anything other than testing.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

```ts
// CommonJS
const { NitrApi } = require('nitrado.js');
require('dotenv/config');

// ESM
import { NitrApi } from 'nitrado.js';
import 'dotenv/config';

// Its recomennded to use dotenv to store your API token
// Optional / Not required for endpoints with no authentication
//                  vvvvvvvvvvvvvvvvvvvvvvvvv
const api = NitrApi(process.env.NITRADO_TOKEN);

// The endpoint for the request
//       vvvvvvv
api.path('/ping', {}).get().then(console.log);

// The method of the request (get, post, put, delete)
//                    vvv
api.path('/ping', {}).get().then(console.log);

// Attaches a callback for the resolution of the Promise
//                          vvvv
api.path('/ping', {}).get().then(console.log);

// Attaches a callback for the rejection of the Promise
//                                            vvvvv
api.path('/ping', {}).get().then(console.log).catch(console.log);

// The parameters of the endpoint
// Parameters are always inclosed in mustache tags ('{}')
//                                    vvvvvvvvvvvv
api.path('/services/{id}/bouncers', { id: 'The id' })

    // The payload data of the request
    //        vvvvvvvvvvvvvvvvvv
    .delete({ ident: 'The ident' })

    // The response from the API
    //     vvv
    .then((res) => {
        // The response message
        //                            vvvvvvv
        const resMesg = res.data.body.message;
        console.log(resMesg);
    })
    .catch(console.log);
```

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the GPL-3.0 License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/cainthebest/nitrado.js.svg?style=for-the-badge
[contributors-url]: https://github.com/cainthebest/nitrado.js/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/cainthebest/nitrado.js.svg?style=for-the-badge
[forks-url]: https://github.com/cainthebest/nitrado.js/network/members
[stars-shield]: https://img.shields.io/github/stars/cainthebest/nitrado.js.svg?style=for-the-badge
[stars-url]: https://github.com/cainthebest/nitrado.js/stargazers
[issues-shield]: https://img.shields.io/github/issues/cainthebest/nitrado.js.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/cainthebest/nitrado.js/issues
[license-shield]: https://img.shields.io/github/license/cainthebest/nitrado.js.svg?style=for-the-badge
[license-url]: https://github.com/cainthebest/nitrado.js/blob/master/LICENSE.txt
