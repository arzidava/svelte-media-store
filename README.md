# svelte-media-store

A utility library to use media query as stores.

## Usage

`mediaStore` is a function taking three arguments:

- a media query
- the value to return if true
- the value to return if false

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
