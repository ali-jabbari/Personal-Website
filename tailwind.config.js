/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'iranSans': ['iransans', 'sans-serif'],
            'iranSansMedium': ['iransans_medium', 'sans-serif'],

        },
        container: {
            center: true,
            padding: {
                DEFAULT: '2rem',
                sm: '3rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            colors: {
                'darkerWhite': '#F8F8F8',
                'background': '#E7E9EF',
                'navy': '#292B37',
                'green': '#44BFA7',
                'greenLight': '#AED797',
                'greenWhite': '#C7DFCD',
                'orange': '#FEC14D',
            },
            animation: {
                typing: 'typingText 8s infinite, typingBlink 1s infinite',
            },
            keyframes: {
                typingText: {
                    '0%': {width: '0%'},
                    '40%': {width: '100%'},
                    '100%': {},
                },
                typingBlink: {
                    'from, to': {borderColor: 'transparent'},
                    '100%': {borderColor: 'orange'},
                }
            }
        },
    },
    plugins: [],

}
