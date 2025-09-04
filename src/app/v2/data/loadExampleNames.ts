const examplesBase = require.context('./samples', true, /\.ts$/).keys();

export let defaultExampleName = '';

export const examples = examplesBase.map((e) => {
  let name = e.slice(2, -3);
  let isDefault = false;
  if (name.endsWith('-default')) {
    name = name.slice(0, -8);
    defaultExampleName = name;
    isDefault = true;
  }

  return {
    name,
    isDefault,
  };
});
