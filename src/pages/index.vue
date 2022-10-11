<script lang="ts" setup>
import { useRecipeStore } from '~/stores/recipe'
const rStore = useRecipeStore()
</script>

<template>
  <div>
    <p text="sm" m="b-4">
      <!-- 今天我们来做菜！Let's Cook! -->
      疫情宅家不知道吃什么？家里的萝卜土豆不知道怎么消灭？每天都在发愁吃什么。
      <br>
      我们轻松帮你解决！在小程序里只需把现有的食材选中，加入菜篮子里，就会自动帮你搭配出菜谱，并附有营养信息参考！所有菜谱都：
    </p>
    <p text="sm" m="b-4" font="bold">
      健康、均衡、营养、便利<br>
      HEALTHY, BALANCED, NUTRIONAL, CONVENIENT
    </p>
    <p>
      <ChooseFood />
    </p>
  </div>
</template>
