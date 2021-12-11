# svelte-media-store

A utility library to use media query as stores.

## Usage

`mediaStore` is a function taking three arguments:

- a media query
- the value to return if true (default: true)
- the value to return if false (default: false)

## Example

```js
import mediaStore from "@arzidava/svelte-media-store";

const mobile = mediaStore("(max-width: 400px)", 400, 0);
```

With this store `$mobile` will return _400_ on screens smaller than 400px and _0_ on larger.

## Prefers reduced motion

For accessibility reasons it is often required to set the duration of animations to 0. Because of this a special store `reduced` is available to simply wraps this specific query:

```html
<script>
    import { reduced } from '@arzidava/svelte-media-store';
    const duration = reduced(500, 0)
</script>

<div in:slide={{ duration: $duration }}>...</div>
```

## Prefers Dark Mode

Another convenience store is for `prefers-color-scheme: dark`

```js
import { darkmode } from "@arzidava/svelte-media-store";
const isDark = darkmode();
```

## Demo

[Repl](https://svelte.dev/repl/a3a327edf4854e9fbd27e475eea2907e?version=3.44.2)
