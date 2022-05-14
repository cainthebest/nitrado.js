# Nitrado.js

This project is still in development.
It does not yet support all features of the official Nitrado API.

It is not recommended to use this project for anything other than testing.

## Exmaple usage

```ts
import 'dotenv/config';
import { NitrApi } from 'nitrado.js';

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
