- Node is held at version 20 to avoid some possible incompatibilities, for example when installing prettier, it shows some errors

## Conventions

- only code in the 'src' folder is being prettified, though some code sits outside that
  - files that can be prettied: `md,json,yaml,js,jsx,ts,tsx,mdx,css`
    - files that can be executed (for tailwind for example): `js,ts,jsx,tsx,mdx`