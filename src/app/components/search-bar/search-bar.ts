import { Component, input, model, output, OutputEmitterRef } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  imports: [FormsModule],
  templateUrl: './search-bar.html',
  styleUrl: './search-bar.css',
})
export class SearchBar {

  search = model("");

  searchButtonClicked: OutputEmitterRef<void> = output<void>();

  searchClicked() {
    this.searchButtonClicked.emit();
  }


}
