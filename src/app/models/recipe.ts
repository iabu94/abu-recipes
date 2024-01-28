import { Ingredient } from './ingredient';

export interface Recipe {
  id: string;
  name: string;
  chef: string;
  imagePath: string;
  ingredients: Ingredient[];
}
