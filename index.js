import { readable } from 'svelte/store'

function media(query, match, nomatch) {
	return readable(false, set => {
		const mql = window.matchMedia(query)
		mql.onchange = ev => set(ev.matches ? match : nomatch)
		set(ev.matches ? match : nomatch)
	})
}

export default media

export const reduced = (match, nomatch) => media('(prefers-reduced-motion)', match, nomatch)
