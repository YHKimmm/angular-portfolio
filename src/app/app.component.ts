import { Component } from '@angular/core';
import { Category } from './model/category';
import { Tag } from './model/tag';

export class TimeOfDate {
  date: Date = new Date();

  constructor() {
    const date = new Date();

    return { date: date };
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}

  date: Date = new TimeOfDate().date;
  author = 'Brayden';
  title = 'Portfolio-Brayden';

  categoryFilter: Category | undefined;
  setCategoryFilter(category: Category) {
    this.categoryFilter = category;
  }

  tagFilter: Tag | undefined;

  setTagFilter(tag: Tag) {
    this.tagFilter = tag;
  }

  clearFilters() {
    this.categoryFilter = undefined;
    this.tagFilter = undefined;
  }
}
