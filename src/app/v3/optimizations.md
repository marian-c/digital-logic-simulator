- all data sits on one object
- changing the zoom of the sketch re-renders everything
- changing position of one element renders everything
- finding the active sketch happens in multiple places
- changing data only de-references the top object
- there could be a context that pre-finds the active sketch and changes when needed since getActiveSketch is used everywhere
- there could be a set that links by reference sketches such that finding inner sketches by UUID is not needed everywhere
  this is for when a sketch refences other sketches for inner elements
- dynamic linking of boxes and connectors (..for example (both ways)) can help with performance by not matching every time
  - boxes can link to Position or InputState
- only render the visible elements
- render lighter elements when too many are visible or when zoomed out past a certain point
- memoize certain components if their outputs are a strict function of their inputs
- certain common components can be shortcut and avoid exploring their inner workings while simulating
- when passing the dependencies to useCallback and those deps are actually stable, wouldn't it be better to use useCallback
  without the dependencies since they're stable and checking them is extra work that's not actually needed?
