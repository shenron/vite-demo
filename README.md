# VueJS 3 project with:
- Vite3
- TS(x)
- Eslint
- Vitest

## App
Component is split in two files:
- `useApp.ts` business code
- `useRender.tsx` render function

## TSX Check
- [event/slots](./src/components/hello_world/)
- [vModel](./src/components/base_input/)
- register global events on [GlobalProps.d.ts](/src/types/GlobalProps.d.ts)

## .vue check 
With [vue-tsc](https://github.com/johnsoncodehk/vue-tsc) it's possible to checked vue files:
```bash
./node_modules/.bin/vue-tsc --noEmit
```

## React's useMemo alternative
- [useMemo/withMemo](./src/components/DisplayMsgOnce.tsx)

## Unit tests
Vitest is used

