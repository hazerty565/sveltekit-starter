import adapter from '@sveltejs/adapter-netlify'; // <-- Changement ici
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    // Use transpileOnly to avoid type-checking errors from dependencies
    preprocess: preprocess({ typescript: { transpileOnly: true } }),

    kit: {
        // L'adaptateur Netlify va maintenant configurer correctement le build 
        // pour générer les Edge Functions et gérer le rendu (SSR).
        adapter: adapter()
    }
};

export default config;
