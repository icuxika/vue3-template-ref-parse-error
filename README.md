## Q
parsing ref<string>("") via baseParse(@vue/compiler-core) raises an error

## How to reproduce this issue
Run
```
yarn
yarn dev
```
Open the url in browser, then you can see
```
10:01:26 [vite] Internal server error: Cannot read properties of undefined (reading 'length')
      at memoizedBinarySearch (file:///C:/Users/icuxika/WebstormProjects/vue3-template-ref-parse-error/node_modules/vite/dist/node/chunks/dep-1513d487.js:9950:25)
      at traceSegmentInternal (file:///C:/Users/icuxika/WebstormProjects/vue3-template-ref-parse-error/node_modules/vite/dist/node/chunks/dep-1513d487.js:10053:17)
      at originalPositionFor$1 (file:///C:/Users/icuxika/WebstormProjects/vue3-template-ref-parse-error/node_modules/vite/dist/node/chunks/dep-1513d487.js:10040:25)
      at formatError (file:///C:/Users/icuxika/WebstormProjects/vue3-template-ref-parse-error/node_modules/vite/dist/node/chunks/dep-1513d487.js:35090:54)
      at TransformContext.error (file:///C:/Users/icuxika/WebstormProjects/vue3-template-ref-parse-error/node_modules/vite/dist/node/chunks/dep-1513d487.js:35024:19)
      at Object.transform (file:///C:/Users/icuxika/WebstormProjects/vue3-template-ref-parse-error/node_modules/vite/dist/node/chunks/dep-1513d487.js:35280:25)
      at async loadAndTransform (file:///C:/Users/icuxika/WebstormProjects/vue3-template-ref-parse-error/node_modules/vite/dist/node/chunks/dep-1513d487.js:39776:29)
```

If you remove the type declaration for the ref's inner value,

> file: ./plugins/vite-plugin-vue-test.ts

```
const value = ref<string>("");
const darkMode = ref<boolean>(false);
```
↓↓↓↓↓↓↓↓↓↓↓↓
```
const value = ref("");
const darkMode = ref(false);
```
the program will run correctly