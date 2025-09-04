const examplesBase = require.context('./samples', true, /\.ts$/).keys();

export const examples = examplesBase.map((e) => {
  let name = e.slice(2, -3);
  let isDefault = false;
  if (name.endsWith('-default')) {
    name = e.slice(0, -8);
    isDefault = true;
  }

  return {
    name,
    isDefault,
  };
});
