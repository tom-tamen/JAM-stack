<script lang="ts" setup>
import type { RecipeData } from '~/models/recipes.model'

const { findOne } = useStrapi4()
const route = useRoute()

const { data: recipe, pending } = useAsyncData(
  'recipe',
  () => findOne<RecipeData>(`recipes/${route.params.slug}`),
)
</script>

<template>
  <div class="container">
    <template v-if="pending">
      <p class="text-xl text-center">
        Chargement...
      </p>
    </template>
    <template v-else>
      <div class="page-container">
        <section class="left-section">
          <h1>{{ recipe.data.title }}</h1>
          <NuxtImg :src="recipe.data.image.url" alt="" aria-hidden="true"
            class="h-[100px] object-contain" />
          <h2 class="mb-0">
            Description
          </h2>
          <p>{{ recipe.data.description }}</p>

          <h2 class="mb-0">Recette</h2>
          <Crafting :craft="recipe.data.craft" :items="recipe.data.items" :output="recipe.data.image.url" />
        </section>


        <aside class="flex flex-col md:flex-row">
          <div class="flex flex-col w-full">
            <h2 class="mb-0">
              Items nécessaires
            </h2>
            <ul class="list-none gap-2 p-0">
              <li class="flex gap-2 items-center" v-for="item in recipe.data.items" :key="item.id">
                <NuxtImg :src="item.item.image.url" alt="image de l'item" class="h-10" />
                <p>x {{ item.quantity }}</p>
              </li>
            </ul>
            <h2 class="mb-0">
              Tags
            </h2>
            <ul class="list-none gap-2 p-0">
              <li class="flex gap-2 items-center" v-for="tag in recipe.data.tags" :key="tag.id">
                <p>{{ tag.name }}</p>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </template>
  </div>
</template>

<style scoped>
.page-container {
  margin-top: 20px;
  display: flex;
  gap: 2rem;
  min-width: 100%;
}

.left-section {
  width: 75%;
}
aside {
  width: 25%;
  border: 2px solid gray;
  padding: 15px;
  height: fit-content;
  background-color: #C6C6C6;
  border: 2px solid #373737;
  border-right-color: #FFF;
  border-bottom-color: #FFF;
  color: #373737;
}

@media screen and (max-width: 820px) {
  .page-container {
    flex-direction: column;
    align-items: center;
  }
  .left-section {
    width: 90%;
  }
  aside {
    width: 90%;
    border: none;
    background-color: transparent;
    color: var(--color-text);
    padding: 0;
  }
  
}
</style>