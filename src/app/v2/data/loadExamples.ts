const examplesBase = require.context('./samples', true, /\.ts$/).keys();

export const examples = examplesBase.map((e) => {
  return e.slice(2, -3);
});
