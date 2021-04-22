# VueJS 3 project with:
- Vite2
- TS(x)
- Eslint


## App
Component is split in two files:
- `useApp.ts` business code
- `useRender.tsx` render function

It's possible to check component' `props` types, but a bit tricky to [check emit/slots types](./src/components/hello_world/).

## Events
Events check are not fully supported, it's possible to register global events on [GlobalProps.d.ts](/src/types/GlobalProps.d.ts)

