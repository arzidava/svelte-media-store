function media(query, match = true, nomatch = false) {
  let state = $state(nomatch);

  if (typeof window !== 'undefined') {
    const mql = window.matchMedia(query);
    mql.onchange = (ev) => (state = ev.matches ? match : nomatch);
    state = mql.matches ? match : nomatch;
  } else {
    state = nomatch;
  }

  return {
    get current() {
      return state;
    },
  };
}

export default media;

export const reduced = (match = true, nomatch = false) =>
  media('(prefers-reduced-motion)', match, nomatch);
export const darkmode = (match = true, nomatch = false) =>
  media('(prefers-color-scheme: dark)', match, nomatch);
