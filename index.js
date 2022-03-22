import { readable } from 'svelte/store'

function media(query, match = true, nomatch = false) {
	return readable(false, set => {
		if (typeof window !== 'undefined') {
			const mql = window.matchMedia(query)
			mql.onchange = ev => set(ev.matches ? match : nomatch)
			set(mql.matches ? match : nomatch)
		} else {
			set(nomatch)
		}
	})
}

export default media

export const reduced = (match, nomatch) => media('(prefers-reduced-motion)', match, nomatch)
export const darkmode = (match, nomatch) => media('(prefers-color-scheme: dark)', match, nomatch)