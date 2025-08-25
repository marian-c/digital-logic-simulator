- Node is held at version 20 to avoid some possible incompatibilities, for example when installing prettier, it shows some errors
- `ts-node` is also needed for jest to read .ts config files
- events in react attributes of type callbacks, I've manually typed, for example:

```typescript jsx
onInput={(e: ChangeEvent<HTMLInputElement>)
```

- "@types/webpack-env" is needed to type the method: `require.context`
- when using `--turbopack` for `next dev` the second argument for `require.context` does not cause it to recurse into
  the folder structure.

## Conventions

- only code in the 'src' folder is being prettified, though some code sits outside that
  - files that can be prettied: `md,json,yaml,js,jsx,ts,tsx,mdx,css` 
    - `package.json`: prettier task
    - `package.json`: lint staged
    - `.editorconfig`
  - files that can be executed (for tailwind for example): `js,ts,jsx,tsx,mdx`
    - `tailwind.config.ts`

## Notes

- to support more advanced scenarios for i18n, one can use this workaround: 
  https://github.com/vercel/next.js/discussions/49415#discussioncomment-10388757
- Feature wise, here's some inspiration: https://www.youtube.com/playlist?list=PLFt_AvWsXl0dAgFi3ywrO-4vdAnw6IjVo