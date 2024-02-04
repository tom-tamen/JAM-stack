<script lang="ts" setup>
import type { IRecipe } from '../models/recipes.model'

defineProps({
  recipe: {
    type: Object as PropType<IRecipe>,
    required: true,
  },
})
</script>

<template>
  <NuxtLink :to="`/recettes/${recipe.slug}`" prefetch class="link-container">
    <li>
      <NuxtImg :src="recipe.image.url" alt="" class="h-[64px] w-[64px]" />
      <h3 class="my-0">
        {{ recipe.title }}
      </h3>
    </li>
  </NuxtLink>
</template>

<style scoped>
.link-container {
  text-decoration: none;
  color: inherit;
  display: flex;
	flex-direction: column;
	background: #C6C6C6;
	border: 2px solid #373737;
	border-right-color: #FFF;
	border-bottom-color: #FFF;
	padding: 30px;
  width: 200px;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  align-items: center;
  text-align: center;
}

.link-container:hover {
  background: #8B8B8B;
}

.dark .link-container {
  color: #020202;
}

</style>
