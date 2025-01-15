- Node is held at version 20 to avoid some possible incompatibilities, for example when installing prettier, it shows some errors
- `ts-node` is also needed for jest to read .ts config files
## Conventions

- only code in the 'src' folder is being prettified, though some code sits outside that
  - files that can be prettied: `md,json,yaml,js,jsx,ts,tsx,mdx,css` 
    - `package.json`: prettier task, 
    - `.editorconfig`
  - files that can be executed (for tailwind for example): `js,ts,jsx,tsx,mdx`