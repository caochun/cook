<script lang="ts" setup>
// import { useGtm } from '@gtm-support/vue-gtm'
import { createConfirmDialog } from 'vuejs-confirm-dialog'
import RecipeBox from '../RecipeBox.vue'
import { tools } from '~/data/food'
import type { RecipeItem } from '~/types'

defineProps<{
  dish: RecipeItem
}>()

// const gtm = useGtm()

// const triggerGtm = (val: string) => {
//   gtm?.trackEvent({
//     event: 'click',
//     category: `dish_${val}`,
//     action: 'click_recipe',
//     label: '跳转菜谱',
//   })
//   gtm?.trackEvent({
//     event: 'click_dish',
//     action: val,
//   })
// }

const { reveal } = createConfirmDialog(RecipeBox, {
  recipe: 'The recipe goes here...',
})
</script>

<template>
  <a
    target="_blank" class="dish-tag tag rounded"
    p="x-2" border="~ blue-200 dark:blue-800" bg="blue-300 opacity-20" @click="reveal"
  >
    <span m="r-1" class="inline-flex justify-center items-center" text="sm blue-700 dark:blue-200">
      {{ `${dish.tags?.includes('杂烩') ? '🍲' : dish.emojis.join(' ')} ${dish.name}` }}
    </span>
    <span v-for="tool, i in tools" :key="i" inline-flex>
      <div v-if="dish.tools?.includes(tool.name)" :class="tool.icon" />
    </span>
  </a>
</template>
