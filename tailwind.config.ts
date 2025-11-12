import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // TODO: have this in SVG form maybe
        grid: "url(data:image/svg+xml;base64,PHN2ZyBzdHlsZT0iY29sb3Itc2NoZW1lOiBsaWdodCBkYXJrOyIgd2lkdGg9IjM4IiBoZWlnaHQ9IjM4IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iMzgiIGhlaWdodD0iMzgiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gMCA5LjUgTCAzOCA5LjUgTSA5LjUgMCBMIDkuNSAzOCBNIDAgMTkgTCAzOCAxOSBNIDE5IDAgTCAxOSAzOCBNIDAgMjguNSBMIDM4IDI4LjUgTSAyOC41IDAgTCAyOC41IDM4IiBmaWxsPSJub25lIiBzdHlsZT0ic3Ryb2tlOmxpZ2h0LWRhcmsoI2QwZDBkMCwgIzZlNmU2ZSk7IiBzdHJva2U9IiNkMGQwZDAiIG9wYWNpdHk9IjAuMiIgc3Ryb2tlLXdpZHRoPSIxIi8+PHBhdGggZD0iTSAzOCAwIEwgMCAwIDAgMzgiIGZpbGw9Im5vbmUiIHN0eWxlPSJzdHJva2U6bGlnaHQtZGFyaygjZDBkMGQwLCAjNmU2ZTZlKTsiIHN0cm9rZT0iI2QwZDBkMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+)"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
