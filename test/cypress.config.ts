import { defineConfig } from 'cypress';

export default defineConfig({
	e2e: {
		setupNodeEvents(on, config) {
			// eslint-disable-next-line @typescript-eslint/no-var-requires,global-require
			require('@cypress/code-coverage/task')(on, config);

			return config;
		},
		baseUrl: 'http://localhost:3000',
		fixturesFolder: 'test/fixtures',
		specPattern: 'test/e2e',
		screenshotsFolder: 'test/screenshots',
		videosFolder: 'test/videos',
		downloadsFolder: 'test/downloads',
		supportFile: 'test/support/e2e.ts',
	},
});
