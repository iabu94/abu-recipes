import { Component, inject, signal } from '@angular/core';
import {
  MatCard,
  MatCardAvatar,
  MatCardContent,
  MatCardHeader,
  MatCardSubtitle,
  MatCardTitle,
} from '@angular/material/card';

import { AsyncPipe, JsonPipe } from '@angular/common';
import { MatDivider } from '@angular/material/divider';
import { Recipe, Reference } from '../models';
import { SearchFieldComponent } from '../search-field/search-field.component';
import { FirestoreCrudService } from '../services';

interface Item {
  id: string;
}

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
    JsonPipe,
    AsyncPipe,
  ],
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  searchKey = signal<string>('');

  recipes$ = inject(FirestoreCrudService).getAll<Recipe>(Reference.RECIPES);
}
