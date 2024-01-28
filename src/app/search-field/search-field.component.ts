import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-search-field',
  standalone: true,
  imports: [
    MatFormField,
    MatLabel,
    MatIcon,
    FormsModule,
    MatInput,
    ReactiveFormsModule,
  ],
  templateUrl: './search-field.component.html',
})
export class SearchFieldComponent {
  formControl = new FormControl('', [Validators.required]);

  @Output() searchKey = new EventEmitter<string>();

  constructor() {
    this.formControl.valueChanges
      .pipe(distinctUntilChanged(), debounceTime(500))
      .subscribe((value) => {
        if (value) {
          this.searchKey.emit(value);
        }
      });
  }
}
