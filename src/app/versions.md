- v3 took the implementation to a certain point,

  - simulation works and handles cycles
  - everything mutates except for the top level, but
  - ...simulation does not take advantage of that, it re-builds everything every time

  but it cannot scale that much in terms of maintainability.

- v4 is a complete rewrite, it is much more maintainable.
  - everything is immutable
