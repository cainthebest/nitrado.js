---
layout: default
title: Installing
parent: Getting Started
nav_order: 1
permalink: /getting_started/installing
---

# Code block testing

## PHP

```php
<?php

$url = "https://api.nitrado.net/ping";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
var_dump($resp);

?>
```

## JavaScript/AJAX

```js
var xhr = new XMLHttpRequest();
xhr.open('GET', url);

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }
};

xhr.send();
```

## Python

```python
import requests

url = "https://api.nitrado.net/ping"


resp = requests.get(url)

print(resp.status_code)
```

## Java

```java
URL url = new URL("https://api.nitrado.net/ping");
HttpURLConnection http = (HttpURLConnection)url.openConnection();
System.out.println(http.getResponseCode() + " " + http.getResponseMessage());
http.disconnect();
```

## C#/.NET

```csharp
var url = "https://api.nitrado.net/ping";

var httpRequest = (HttpWebRequest)WebRequest.Create(url);


var httpResponse = (HttpWebResponse)httpRequest.GetResponse();
using (var streamReader = new StreamReader(httpResponse.GetResponseStream()))
{
   var result = streamReader.ReadToEnd();
}

Console.WriteLine(httpResponse.StatusCode);
```

## Bash

```bash
curl -X GET "https://api.nitrado.net/ping"
```
