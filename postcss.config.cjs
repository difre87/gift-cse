const tailwindcss = require('@tailwindcss/postcss');

module.exports = {
	plugins: [
		tailwindcss({
            config: './tailwind.config.js',
            content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
            theme: {
                extend: {
                    colors: {
                        primary: '#F8AD47',
                        secondary: '#2C3058',
                    },
                    screens: {
                        xs: '475px',
                        sm: '640px',
                        md: '768px',
                        lg: '1024px',
                        xl: '1280px',
                    },
                },

            },
        }),
		require('autoprefixer'),
	],
};
