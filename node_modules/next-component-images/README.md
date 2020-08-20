<!-- ======================================================================================================================= -->
<!-- README                                                                                                                  -->
<!-- ======================================================================================================================= -->
# Next.js + Raster Images + SVG Images as React Component

[![license](https://img.shields.io/github/license/jagaapple/next-component-images.svg)](https://opensource.org/licenses/MIT)
[![@jagaapple_tech](https://img.shields.io/badge/contact-%40jagaapple_tech-blue.svg)](https://twitter.com/jagaapple_tech)

Import raster images and SVG as React Component in Next.js.


## Table of Contents

<!-- TOC depthFrom:2 -->

- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Quick Start](#quick-start)
  - [Requirements](#requirements)
  - [Installation](#installation)
  - [Usage](#usage)
    - [Raster Images](#raster-images)
    - [SVG Images](#svg-images)
- [Options](#options)
  - [Specifying inline images size limit](#specifying-inline-images-size-limit)
  - [Specifying path prefix](#specifying-path-prefix)
  - [Configures SVGO](#configures-svgo)
- [Recipes](#recipes)
  - [Use with other libraries for Next.js](#use-with-other-libraries-for-nextjs)
  - [Styling SVG](#styling-svg)
- [Contributing to next-component-images](#contributing-to-next-component-images)
  - [Git branch naming convention](#git-branch-naming-convention)
- [License](#license)

<!-- /TOC -->


## Features
```jsx
import photoImage from "./photo.jpg";
import LogoImage from "./logo.svg";

export default () => (
  <div>
    <img src={photoImage} />
    <LogoImage width="230" height="140" />
  </div>
);
```

- Import raster images as inline images using JavaScript Module syntax ( `import` or `require` )
  - Supports PNG (.png), JPEG (.jpg/.jpeg), and GIF (.gif) images
- Import an image path when the image exceeds a specified size limit
- Import SVG images as React SVG Component
  - You can implement styling with CSS or others


## Quick Start
### Requirements
- Next.js version 5.0.0 or higher
- npm or Yarn

### Installation

```bash
$ npm install --save next-component-images
```

If you are using Yarn, use the following command.

```bash
$ yarn add next-component-images
```

### Usage
At first, setup your Next.js settings.

```js
// next.config.js
const withComponentImages = require("next-component-images");

module.exports = withComponentImages();
```

#### Raster Images
You can import raster images as inline images or get image paths.

```jsx
import photo from "./photo.jpg";
// or: const photo = require("./photo.jpg");

export default () => (
  <div>
    <img src={photo} />
  </div>
);
```

#### SVG Images
Also, you can import SVG images as React Component.

```jsx
import LogoImage from "./logo.svg";
// or: const LogoImage = require("./logo.svg");

export default () => (
  <div>
    <LogoImage width="230" height="140" />
  </div>
);
```


## Options
You can set options in `next.config.js` file.

```js
// next.config.js
const withComponentImages = require("next-component-images");

module.exports = withComponentImages({
  // Options are here.
});
```

### Specifying inline images size limit
`inlineSizeLimit` option is possible to specify inline images size limit. Images exceeding this size, imports only image paths.
A default value is `8192` .

### Specifying path prefix
`pathPrefix` option is possible to specify path prefix. A default value is an empty string `""` .

### Configures SVGO
`svgoOptions` option is possible to specify options for [SVGO](https://github.com/svg/svgo/).


## Recipes
### Use with other libraries for Next.js
```js
// next.config.js
const withTypescript = require("@zeit/next-typescript");
const withComponentImages = require("next-component-images");

module.exports = withTypescript(withComponentImages({
  // Options are here.
});
```

### Styling SVG
Imported SVG is React SVGFactory, so you can specify `width` , `height` , and `fill` attributes.

```jsx
import LogoImage from "./logo.svg";

export default () => (
  <div>
    <LogoImage fill="#f00" />
  </div>
);
```


## Contributing to next-component-images
Bug reports and pull requests are welcome on GitHub at
[https://github.com/jagaapple/next-component-images](https://github.com/jagaapple/next-component-images). This project is
intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the
[Contributor Covenant](http://contributor-covenant.org) code of conduct.

Please read [Contributing Guidelines](./.github/CONTRIBUTING.md) before development and contributing.


## License
The library is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).

Copyright 2018 Jaga Apple. All rights reserved.
