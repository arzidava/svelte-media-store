> **DEPRECATED**
> This functionality is now built-in Svelte with v5.7.0
> https://svelte.dev/docs/svelte/svelte-reactivity#MediaQuery

---
---
---


# svelte-media-store

A utility library providing a rune reacting to media queries.

## Usage

`matchMedia` is a function taking three arguments:

- a media query
- the value to return if true (default: true)
- the value to return if false (default: false)

It returns an object with a single property `current`.

## Example

```js
import matchMedia from '@arzidava/svelte-media-store';

const mobile = matchMedia('(max-width: 400px)', 400, 0);
```

With this store `mobile.current` will return _400_ on screens smaller than 400px and _0_ on larger.

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
import { darkmode } from '@arzidava/svelte-media-store';
const isDark = darkmode();
```

## Use with SvelteKit

The store relies on `window.matchMedia` to provide it's values, but during SSR `window` is not defined and therefore the code cannot run. It does need to have a value though, so it will default to the `false` parameter.

This can cause some flickering if the server renders with `false` and the page renders with `true`, if possible add a browser check for SvelteKit.

## Demo

[Repl](https://svelte.dev/repl/a3a327edf4854e9fbd27e475eea2907e?version=3.44.2)
