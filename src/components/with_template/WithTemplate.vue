<template>
  <p>Hello {{ msg }}</p>
  <Foo>
    <template #>Call Foo</template>
</Foo>
</template>

<script lang="ts" src="./WithTemplate.ts"></script>
