import type { Config } from "tailwindcss"

const config: Config = {
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                // 30 секунд для плавного хода 15 картинок
                "scroll-right": "scroll-right 30s linear infinite",
            },
            keyframes: {
                "scroll-right": {
                    "0%": { transform: "translateX(-50%)" },
                    "100%": { transform: "translateX(0%)" },
                },
            },
        },
    },
    plugins: [],
}
export default config