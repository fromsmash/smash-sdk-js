<p align="center">
  <a href="https://fromsmash.com/"><img src="https://developer.fromsmash.com/LOGO_SMASH_API.png" align="center" width="135" alt="Send big files"/></a>
<h1 align="center">Smash SDK for JavaScript</h1>
</p>
The Smash SDK for JavaScript is a JavaScript library for the Smash API. It enables you to easily work with Smash Web Services and has a modular architecture with a separate package for each service. It provides a set of tools and utilities for building applications that interact with the Smash services.
<hr />

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Available packages](#available-packages)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [API Versions](#api-versions)
- [async/await](#asyncawait)
- [Promises](#promises)
- [Error handling](#error-handling)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

## Available packages

- @smash-sdk/billing
- @smash-sdk/customization
- @smash-sdk/discovery
- @smash-sdk/directory
- @smash-sdk/domain
- @smash-sdk/iam
- @smash-sdk/image
- @smash-sdk/link
- @smash-sdk/promotion
- @smash-sdk/transfer
- @smash-sdk/vat

## Installation

You can install packages using npm:

```javascript
npm install @smash-sdk/transfer
npm install @smash-sdk/iam
npm install @smash-sdk/link
```

We will use the `@smash-sdk/transfer` package as an example.

## Getting Started

Let’s walk through setting up a project that depends on `@smash-sdk/transfer` service from the Smash SDK and makes a simple service call. These steps assume you have Node.js and NPM already installed.

```javascript
import { Transfer } from "@smash-sdk/transfer/10-2019";

const transferSdk = new Transfer({ region: "Your Smash API region here", token: "Your Smash API key here" });
const { transfers } = await transferSdk.listTransfers();
```

## Configuration

The Smash SDK for JavaScript uses the `config` object to store configuration information. The `config` object is a singleton object that is shared by all Smash SDK for JavaScript packages. You can use the `config` object to configure the Smash SDK for JavaScript.
It is recommended to set the `token` and `region` before using any Smash SDK for JavaScript package.

```javascript
import { Transfer } from "@smash-sdk/transfer/10-2019";
import { config } from "@smash-sdk/core";

config.setToken("Your Smash API key here");
config.setRegion("Your Smash API region here");

const transferSdk = new Transfer();
```

For more information about the `config` object, check the [@smash-sdk/core documentation](https://github.com/fromsmash/smash-sdk-core-js).
## API Versions

Each Smash API is available in multiple versions, identified by a date (in `MM-YYYY` format). For example, the `Transfer` API is currently available in `07-2022`, `07-2020`, and `10-2019` versions. The Smash SDK for JavaScript is version-modulated. It means that you can use the version you want by importing the corresponding module.

For example, you can import the `Transfer` API in `07-2022` version by using the following import statement:

```javascript
import { Transfer } from "@smash-sdk/transfer/07-2022";
```

and the `Transfer` API in `10-2019` version by using the following import statement:

```javascript
import { Transfer } from "@smash-sdk/transfer/10-2019";
```
Some SDK methods are only available in latest version of a package. For example, the `Transfer` API in `10-2019` version doesn't have the `GetTransferFilePreview()` method available in `07-2022` version.
Make sure you're using the right version according to the documentation to be able to use a particular method. 

## async/await

The Smash SDK for JavaScript uses async/await to handle asynchronous operations. All API calls return a promise that you can await. For example, you can use the following code to list all transfers:

```javascript
import { Transfer } from "@smash-sdk/transfer/10-2019";

const transferSdk = new Transfer({ region: "Your Smash API region here", token: "Your Smash API key here" });

async function listTransfers() {
  const { transfers } = await transferSdk.listTransfers();
  return transfers;
}
```

## Promises

You can also use promises to handle asynchronous operations. For example, you can use the following code to list all transfers:

```javascript
import { Transfer } from "@smash-sdk/transfer/10-2019";

const transferSdk = new Transfer({ region: "Your Smash API region here", token: "Your Smash API key here" });

transferSdk.listTransfers().then(({ transfers }) => {
  console.log(transfers);
}).catch((error) => {
  console.log(error);
});
```

## Error handling

The Smash SDK for JavaScript provides a set of error classes that you can use to handle errors. For example, you can use the following code to handle an invalid parameter error:

```javascript
import { Transfer, errors } from "@smash-sdk/transfer/10-2019";

try {
  const { transfers } = await transferSdk.listTransfers();
} catch (error) {
  if (error instanceof errors.ListTransfersError.InvalidParameterError) {
      console.log(error);
  }
}
```

## Documentation
Check the [Smash SDK for JavaScript documentation](https://api.fromsmash.com/docs/sdk) for more information about the Smash SDK for JavaScript.

## Contributing

Contibutions are welcome! If you'd like to help improving the Smash SDK for JavaScript, please fork the repository, make your changes, and submit a pull request.

## License

Smash SDK for JavaScript is released under the MIT License.