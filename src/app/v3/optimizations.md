- all data sits on one object
- changing the zoom of the sketch re-renders everything
- changing position of one element renders everything
- finding the active sketch happens in multiple places
- changing data only de-references the top object
- there could be a context that pre-finds the active sketch and changes when needed since getActiveSketch is used everywhere
- there could be a set that links by reference sketches such that finding inner sketches by UUID is not needed everywhere
  this is for when a sketch refences other sketches for inner elements
- dynamic linking of boxes and connectors (..for example (both ways)) can help with performance by not matching every time
  - boxes can link to Position or InputState and so on
- only render the visible elements
- render lighter elements when too many are visible or when zoomed out past a certain point
- memoize certain components if their outputs are a strict function of their inputs
- certain common components can be shortcut and avoid exploring their inner workings while simulating
- when passing the dependencies to useCallback and those deps are actually stable, wouldn't it be better to use useCallback
  without the dependencies since they're stable and checking them is extra work that's not actually needed?
- deep check for structure equality before simulating, and document the perf diff
- maybe Structure can have a Version flag and we can skip simulating based on that

- when simulating
  - to avoid all lookup at render time, we can use maps instead of arrays (boxSimState and connectorSimState,
    but also maybe other stuff, for example positions and so on)
  - try storing only box outputs vs. storing only connectors, look up at render time everything else
  - don't store inputs, loop up at render time, don't store connectors, loop up at render time
  - store inputs, avoid loop up at render time
  - store connectors, avoid loop up at render time
  - all these might be faster if we ref link between box/connector and simState

TODO:

- when a sketch (which is being used as a custom box) gets changed, warn the user
- when the user wants to edit an example sketch, offer the user the option to clone it
- WHEN LOADING A SKETCH RECREATE THE SIMULATION STATE, and the full chain of customSketchesSupportData
  this is just so the simulation process does not have to have a bunch of ifs to see if the data is there or not
- when mouse over a box, highlight the connectors
- when mouse over a connector, highlight the boxes
- we don't need to have inputs, simulation and customSketchesSupportData in the example sketches
- we don't need to store simulation and customSketchesSupportData to local storage,
- the cleanup function should also fill in the simulation.
- move all the examples to JSON files
