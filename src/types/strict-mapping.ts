export type StrictMapping<Keys extends string, Mapping extends Record<string, object>> =
  // Missing keys?
  Exclude<Keys, keyof Mapping> extends never
    ? // Extra keys?
      Exclude<keyof Mapping, Keys> extends never
      ? { [K in Keys]: Mapping[K] } // valid shape is returned
      : '❌ Extra keys not allowed in mapping'
    : '❌ Missing keys in mapping';
