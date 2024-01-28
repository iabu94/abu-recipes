import { Unit } from './unit';

export interface Ingredient {
  id: string;
  name: string;
  quantity: number;
  unit: Unit;
}
