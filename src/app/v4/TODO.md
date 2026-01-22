- treat clock components like inputs
- the periodic tick will just flip these clocks comp/inputs
  - but not via the main $setSelectedSketch, make a new one
- would be nice to have clock divider components, tick only once every N times the master clock - but must have an input clock to begin with
- proper save for pan and zoom, maybe even pull it out of the sketch
  - store it in a tree, like the active tree
  - not in the sketch anymore
  - make sure to delete from it when deleting custom components from sketch
  - also delete from it when deleting a sketch
    - better yet, for this case, include it in the cleanup function
    - when adding it's not such a problem because we can default to 001
- markers on the edge of the canvas for the center
  - maybe also for every out of view box component
- display a marker (+) for x:0, y:0

- move pan&zoom out of the sketch
  - make it a tree
- implement focus mode
- finish up drag node

- test perf with all the assertIsDefined, assertTrue and error() removed, see if that's faster

  - error() is less important

- is it faster if we transform the arrays (structure.boxes) into maps?

- example sketches should be JSON files, might speed up typescript

- when selecting an box element that is custom, add a checkbox in the sidebar that when activated will allow connectors coming out if it to use the colors of the underlying custom component sketch

- maybe don't store the simulation at all

- the simulation would work less if it would work with a structure that has all the custom chips inlined

- optimize simulation for provided custom sketches

- default to a non-example example so it't not read-only

## CSS libraries

https://flyonui.com/docs/overlays/modal/

- lots of components, requires JS plugin for some of them, nice docs

https://daisyui.com/

- nice neutral look
- not a lot of components and are pretty simple

https://bulma.io/documentation/helpers/flexbox-helpers/

- not tailwind

https://catalyst.tailwindui.com/docs/stacked-layout

- PAID
- from tailwind
- headless UI, delivered via download, not that many components
- bug in scrolling dialog conentents plugin
- very rounded
