import { Pipe, PipeTransform } from '@angular/core';
import { Posts } from 'src/app/feature/models/posts.model';

@Pipe({
  name: 'searchbytitle'
})
export class SearchbytitlePipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.includes(searchText);
    });
  }
}
