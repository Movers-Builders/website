tailwind.config = {
    theme: {
        extend: {
            colors: {
                'sui-darker': '#060812',
                'sui-dark': '#1A1D29',
                'sui-blue': '#4DA2FF',
                'sui-cyan': '#4ECDC4',
                'sui-purple': '#8B5CF6'
            },
            fontFamily: {
                'satoshi': ['Satoshi', 'sans-serif']
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'slide-up': 'slideUp 0.6s ease-out forwards',
                'fade-in': 'fadeIn 0.6s ease-out forwards',
                'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'bounce': 'bounce 1s infinite'
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' }
                },
                slideUp: {
                    '0%': { transform: 'translateY(30px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' }
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                }
            },
            backdropBlur: {
                'xs': '2px'
            }
        }
    }
} 