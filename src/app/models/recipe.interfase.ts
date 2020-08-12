import { Ingredient } from './ingredient.model';

export interface IRecipe {
    name: string;
    ingredients: Array<Ingredient>;
    id?: number;
}
export interface IRecipes {
    recipes: Array<IRecipe>;
}
