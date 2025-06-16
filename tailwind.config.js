import defaultTheme from 'tailwindcss/defaultTheme';

export default {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.jsx',
        './resources/**/*.tsx',
    ],
    theme: {
        extend: {
            fontFamily: {
                roboto: ['Roboto', ...defaultTheme.fontFamily.sans],
            },
            screens: {
            'xs': '475px',
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
            },
        },

    },
    plugins: [],
};
