<script lang="ts" setup>
import RecipeCard from '~/components/RecipeCard.vue'
import type { ITag } from '~/models/recipes.model'

const { find } = useStrapi4()
const search = useSearchStore()

const { data: tags } = useAsyncData(
  'tags',
  () => find<{ data: ITag[] }>('tags'),
)

function addTag(tag: string) {
  if (!search.queryTags.includes(tag))
    search.queryTags.push(tag)
  else search.queryTags = search.queryTags.filter(t => t !== tag)
}

useHead({
  title: 'JamCraft - Recettes',
  meta: [
    {
      name: 'description',
      content: 'Retrouvez toutes les recettes artisanales de JamCraft'
    }
  ]
})
</script>

<template>
  <div class="container">
    <div v-if="!search.pending && search.sortedByTags" class="flex flex-col gap-y-4">
      <h2 class="mb-0">
        Recettes artisanales
      </h2>
      <div class="flex flex-col lg:flex-row gap-4 index-container">
        <aside class="flex flex-col gap-4 lg:w-1/4">
          <h2>Filtres de recherche :</h2>
          <div class="form-group flex flex-col gap-2" role="search">
            <label for="search">Chercher une recette :</label>
            <input
              id="search" v-model="search.query"
              class="search-input"
              type="search"
            >
          </div>
          <div class="form-group flex flex-col items-start">
            <p>Filtrer par tag :</p>
            <div class="flex flex-wrap items-start gap-2" role="group">
              <TagButton
                v-for="tag in tags?.data"
                :key="tag.id"
                :tag="tag"
                :isActive="search.queryTags.includes(tag.slug)"
                @click="addTag"
              />
            </div>
            <button
              class="reset-tags mt-4 appearance-none border-none bg-transparent p-0 underline cursor-pointer"
              @click="search.resetTags"
            >
              Réinitialiser les tags sélectionnés
            </button>
          </div>
        </aside>
        <client-only>
          <div class="w-full">
            <h2>Résultats de recherche : </h2>
            <ul
              v-if="search.sortedByTags.length"
              class="search-results"
            >
              <RecipeCard
                v-for="recipe in search.sortedByTags"
                :key="recipe.id"
                :recipe="recipe"
              />
            </ul>
            <p v-else>
              Aucun résultat pour cette recherche
            </p>
          </div>
        </client-only>
      </div>
    </div>
  </div>
</template>

<style scoped>

.dark .reset-tags {
  color: var(--color-text);
}
.search-input {
	background-color: #8B8B8B;
	border: 2px solid #373737;
	border-right-color: #FFF;
	border-bottom-color: #FFF;
  height: 36px;
  outline: none;
  font-size: 1em;
  padding: 0 10px;
}

.search-results {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 640px;
}

@media screen and (max-width: 1230px) {
  .index-container {
    flex-direction: column;
  }

  aside{
    width: 100%;
  }
  
}

@media screen and (max-width: 960px) {
  .search-results {
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .search-results {
    grid-template-columns: 1fr;
    width: 100%;
  }
}

</style>