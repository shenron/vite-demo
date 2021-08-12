# VueJS 3 project with:
- Vite2
- TS(x)
- Eslint


## App
Component is split in two files:
- `useApp.ts` business code
- `useRender.tsx` render function

## TSX Check
- [event/slots types](./src/components/hello_world/).
- register global events on [GlobalProps.d.ts](/src/types/GlobalProps.d.ts)

## Unit tests
Jest is used to run unit tests. For TSX compatibility babel has been installed.

