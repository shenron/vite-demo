<template>
  <p>Hello {{ msg }}</p>
  <input v-model="dto.parentMsg" />
  <input v-model="dto.childMsg" /> {{ dto }}
</template>

<script lang="ts">
import HelloWorld from './WithTemplate';

export default HelloWorld;
</script>
