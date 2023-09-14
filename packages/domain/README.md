<p align="center">
  <a href="https://api.fromsmash.com/"><img src="https://developer.fromsmash.com/LOGO_SMASH_API.png" align="center" width="135" /></a>
<h1 align="center">@smash-sdk/domain</h1>
</p>
<br />
<p align="center">
  <a href="https://npmjs.com/package/@smash-sdk/domain"><img
      src="https://img.shields.io/npm/v/@smash-sdk/domain.svg" /></a>
  <br />
  <img
    src="https://badges.herokuapp.com/browsers?labels=none&googlechrome=latest&firefox=latest&microsoftedge=latest&edge=latest&safari=latest&iphone=latest" />
</p>
<hr />

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Getting started](#getting-started)
  - [Import](#import)
  - [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)


## Installation

You can install @smash-sdk/domain using npm:


```bash
npm install @smash-sdk/domain
```


## Getting started

### Import

The Smash SDK is version-modulated. Some methods are only available in latest version. Make sure you're using the right version according to the
documentation to be able to use a particular method.

```js
// Using ES6 module
import { Domain } from '@smash-sdk/domain/10-2019';
```

```js
// Or using CommonJS module
const { Domain } = require('@smash-sdk/domain/10-2019');
```

### Usage

```js
const domain = new Domain({ token: "Put your Smash API Key here" });
```

Parameters:

- `token` (required): A string containing your [smash API Key](#generating-an-api-key).


## API Reference

Please refer to the [API documentation](https://api.fromsmash.com/docs/integrations/node-js) for more information on the available methods and
options.

## Examples

You can find node usage and integration examples of @smash-sdk/domain in the dedicated [examples
folder](https://github.com/fromsmash/example-js/tree/main/node/ts).

## Contributing

Contibutions are welcome! If you'd like to help improving @smash-sdk/domain, please fork the repository, make your changes, and submit a pull request.

## License

@smash-sdk/domain is released under the MIT License