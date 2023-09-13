# svelte-maskify

svelte-maskify is a action wrapper for [AlpineJS masks](https://alpinejs.dev/plugins/mask).

To get started install the package with your favorite package manager:

```cmd
npm i svelte-maskify
```

```cmd
pnpm i svelte-maskify
```

```cmd
yarn i svelte-maskify
```

```cmd
bun i svelte-maskify
```

## Usage

Importing svelte-maskify:

```js
import { maskify } from 'svelte-maskify';
```

The svelte-maskify API is very simular to AlpineJS's API, the difference is that instead of passing the mask as a data-attribute (`x-mask`) svelte-maskify uses the action parameters to pass in the mask.

```diff
- <input x-mask="99/99/99" />
+ <input use:maskify={"99/99/99"} />
```

Note: This also allows for you to update the mask by changing the passed in param, identical to [AlpineJS's dynamic masks](https://alpinejs.dev/plugins/mask#mask-functions).

If you have any further questions about constructing masks and how they work you can visit the [AlpineJS docs](https://alpinejs.dev/plugins/mask).

## Limitiations

svelte-maskify currently does not support money formatting like AlpineJS does, this is planned to be added in the future though!

## License

 The MIT License (MIT)

Copyright © 2023 Hugo Korte

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
