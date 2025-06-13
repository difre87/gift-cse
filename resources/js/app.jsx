import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';
import { createRoot } from 'react-dom/client';

createInertiaApp({
	resolve: name => {
        // console.log(`Resolving page component: ${name}`);
        return resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx')
        )
    },
	setup({ el, App, props }) {
        // console.log('Rendering Inertia App', props);
		createRoot(el).render(<App {...props} />);
	},
});
