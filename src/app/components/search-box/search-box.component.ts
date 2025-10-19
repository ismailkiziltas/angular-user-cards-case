import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent {
  @Input() placeholder: string = 'Ara...';
  @Input() searchTerm: string = '';
  @Output() searchChange = new EventEmitter<string>();
  @Output() clearSearch = new EventEmitter<void>();

  onSearchChange(value: string) {
    this.searchChange.emit(value);
  }

  onClearSearch() {
    this.searchTerm = '';
    this.clearSearch.emit();
  }
}