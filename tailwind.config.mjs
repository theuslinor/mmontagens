/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				condensed: ['Oswald', 'sans-serif'],
			},
			colors: {
				mm: {
					blue: '#1489c8',     
					cyan: '#19a1cd',
					darkblue: '#0d5d9c', 
					yellow: '#fbc02d',   
					dark: '#1e1e1e',     
					footer: '#1a1a1a',   
					light: '#f7f7f7',    
					textgray: '#666666'  
				}
			}
		},
	},
	plugins: [],
}