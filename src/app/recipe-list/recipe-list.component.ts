import { Component, signal } from '@angular/core';
import { SearchFieldComponent } from '../search-field/search-field.component';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [SearchFieldComponent],
  templateUrl: './recipe-list.component.html',
})
export class RecipeListComponent {
  searchKey = signal<string>('');
}
