tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#4C82FB',
                    dark: '#3563E9',
                    light: '#7AA4FF',
                },
                secondary: '#0ECB81',
                danger: '#F6465D',
                warning: '#F3BA2F',
                dark: {
                    bg: '#0B0E11',
                    surface: '#181A20',
                    card: '#1E2329',
                    border: 'rgba(71, 77, 87, 0.2)',
                    hover: '#2B3139',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                orbitron: ['Orbitron', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
        }
    }
};
