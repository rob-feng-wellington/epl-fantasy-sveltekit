import adapter from '@sveltejs/adapter-auto';
/* import preprocess from 'svelte-preprocess'; */
import { optimizeImports } from "carbon-preprocess-svelte";

const production = process.env.NODE_ENV === 'production';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [optimizeImports()],

	kit: {
		adapter: adapter(),

		vite: {
			server: {
				hmr: {
					clientPort: process.env.HMR_HOST ? 443 : 3000,
					host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : 'localhost'
				}
			},
			optimizeDeps: {
				include: ['@carbon/charts'],
			},
			ssr: {
				noExternal: [production && '@carbon/charts'].filter(Boolean),
			},
		}
	}
};

export default config;