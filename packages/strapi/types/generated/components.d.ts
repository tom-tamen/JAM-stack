import type { Schema, Attribute } from '@strapi/strapi';

export interface RecipesCraftRecipe extends Schema.Component {
  collectionName: 'components_recipes_craft_recipes';
  info: {
    displayName: 'Items pour le craft';
    icon: 'grid';
    description: '';
  };
  attributes: {
    item: Attribute.Relation<
      'recipes.craft-recipe',
      'oneToOne',
      'api::item.item'
    >;
    quantity: Attribute.Integer;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'recipes.craft-recipe': RecipesCraftRecipe;
    }
  }
}
