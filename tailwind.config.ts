import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'playfair': ['Playfair Display', 'serif'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				celebration: {
					blue: 'hsl(var(--celebration-blue))',
					green: 'hsl(var(--celebration-green))',
					orange: 'hsl(var(--celebration-orange))',
					purple: 'hsl(var(--celebration-purple))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			backgroundImage: {
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)',
				'gradient-celebration': 'var(--gradient-celebration)',
				'gradient-subtle': 'var(--gradient-subtle)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'celebration': 'var(--shadow-celebration)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)'
			},
			transitionTimingFunction: {
				'magical': 'var(--transition-magical)',
				'bounce': 'var(--transition-bounce)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'firework': {
					'0%': { transform: 'scale(0.1)', opacity: '1' },
					'25%': { transform: 'scale(0.5)', opacity: '1' },
					'100%': { transform: 'scale(1)', opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'bounce-gentle': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0)' },
					'50%': { opacity: '1', transform: 'scale(1)' }
				},
				'confetti-fall': {
					'0%': { transform: 'translateY(-100vh) rotateZ(0deg)' },
					'100%': { transform: 'translateY(100vh) rotateZ(360deg)' }
				},
				'heart-beat': {
					'0%': { transform: 'scale(1)' },
					'14%': { transform: 'scale(1.15)' },
					'28%': { transform: 'scale(1)' },
					'42%': { transform: 'scale(1.15)' },
					'70%': { transform: 'scale(1)' }
				},
				'fire': {
					'0%': { transform: 'rotate(-1deg) scale(1)' },
					'100%': { transform: 'rotate(1deg) scale(1.1)', height: '70px' }
				},
				'wiggle': {
					'0%, 100%': { transform: 'rotate(0deg)' },
					'25%': { transform: 'rotate(-2deg)' },
					'75%': { transform: 'rotate(2deg)' }
				},
				'glow': {
					'0%, 100%': { boxShadow: '0 0 5px #ff6b35' },
					'50%': { boxShadow: '0 0 20px #ff6b35, 0 0 30px #ffd700', backgroundColor: '#ffd700' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'zoom-in': {
					'0%': { transform: 'scale(0.3)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'slide-in-up': {
					'0%': { transform: 'translateY(20px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'gasoline-pour': {
					'0%': { transform: 'scaleY(0)', opacity: '0' },
					'20%': { transform: 'scaleY(0.3)', opacity: '0.8' },
					'80%': { transform: 'scaleY(1)', opacity: '0.8' },
					'100%': { transform: 'scaleY(1)', opacity: '0' }
				},
				'explosion-expand': {
					'0%': { width: '20px', height: '20px', opacity: '1' },
					'50%': { width: '100px', height: '100px', opacity: '0.6' },
					'100%': { width: '150px', height: '150px', opacity: '0' }
				},
				'flicker': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.7' }
				},
				'pour': {
					'0%': { height: '0px' },
					'100%': { height: '50px' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'firework': 'firework 1.5s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'bounce-gentle': 'bounce-gentle 2s ease-in-out infinite',
				'sparkle': 'sparkle 1.5s ease-in-out infinite',
				'confetti-fall': 'confetti-fall 3s linear infinite',
				'heart-beat': 'heart-beat 1.5s ease-in-out infinite',
				'fire': 'fire 0.8s ease-in-out infinite alternate',
				'wiggle': 'wiggle 0.5s ease-in-out 3',
				'glow': 'glow 0.5s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 2s ease-out',
				'zoom-in': 'zoom-in 1.5s ease-out',
				'slide-in-up': 'slide-in-up 1s ease-out 0.5s both',
				'slide-in-up-delayed': 'slide-in-up 1s ease-out 1s both',
				'gasoline-pour': 'gasoline-pour 1.5s ease-in-out',
				'explosion-expand': 'explosion-expand 0.8s ease-out',
				'flicker': 'flicker 0.3s ease-in-out infinite',
				'pour': 'pour 1.5s ease-in-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
