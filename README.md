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

## API

Importing svelte-maskify:
```js
import { maskify } from 'svelte-maskify';
```

The svelte-maskify API is very simular to AlpineJS's API, the difference is that instead of passing the mask as a data-attribute (``x-mask``) svelte-maskify uses the action parameters to pass in the mask.
```diff
- <input x-mask="99/99/99" />
+ <input use:maskify={"99/99/99"} />
```
Note: This also allows for you to update the mask by chaning the passed in param, identical to [AlpineJS's dynamic masks](https://alpinejs.dev/plugins/mask#mask-functions).

## Limitiations

svelte-maskify currently does not support money formatting like AlpineJS does, this is planned to be added in the future though!
