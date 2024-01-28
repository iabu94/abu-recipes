import { Component, signal } from '@angular/core';
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';

import { MatDivider } from '@angular/material/divider';
import { Recipe, Unit } from '../models';
import { SearchFieldComponent } from '../search-field/search-field.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [
    SearchFieldComponent,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardAvatar,
    MatDivider,
  ],
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  searchKey = signal<string>('');

  recipes: Recipe[] = [
    {
      id: '1',
      name: 'Spaghetti',
      chef: 'Jabbar Bhai',
      imagePath: 'https://source.unsplash.com/1600x900/?spaghetti',
      ingredients: [
        {
          id: '1',
          name: 'Spaghetti',
          quantity: 100,
          unit: Unit.GRAM,
        },
        {
          id: '2',
          name: 'Tomato Sauce',
          quantity: 200,
          unit: Unit.MILLILITER,
        },
      ],
    },
    {
      id: '2',
      name: 'Pizza',
      chef: 'Ape Amma',
      imagePath: 'https://source.unsplash.com/1600x900/?pizza',
      ingredients: [
        {
          id: '3',
          name: 'Flour',
          quantity: 200,
          unit: Unit.GRAM,
        },
        {
          id: '4',
          name: 'Tomato Sauce',
          quantity: 200,
          unit: Unit.MILLILITER,
        },
        {
          id: '5',
          name: 'Cheese',
          quantity: 200,
          unit: Unit.GRAM,
        },
      ],
    },
  ];
}
