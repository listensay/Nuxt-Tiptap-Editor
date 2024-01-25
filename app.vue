<script lang="ts" setup>
const value = ref('')
</script>

<template>
  <div>
    <h1>editor</h1>
    <ClientOnly>
      <TipTap v-model="value"></TipTap>
    </ClientOnly>
  </div>
</template>
