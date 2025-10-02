- all data sits on one object
- changing the zoom of the sketch re-renders everything
- changing position of one element renders everything
- finding the active sketch happens in multiple places
- changing data only de-references the top object
- there could be a context that pre-finds the active sketch and changes when needed
- there could be a set that links by reference sketches such that finding inner sketches by UUID is not needed everywhere
  this is for when a sketch refences other sketches for inner elements
