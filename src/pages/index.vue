<script lang="ts" setup>
import { useRecipeStore } from '~/stores/recipe'
const rStore = useRecipeStore()
</script>

<template>
  <div>
    <p text="sm" m="b-4">
      今天我们来做菜！Let's Cook!
    </p>
    <p>
      <ChooseFood />
    </p>
  </div>
</template>
