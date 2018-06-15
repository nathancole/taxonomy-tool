import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topicFilter'
})
export class TopicFilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {

      if (it.name.toLowerCase().includes(searchText)) {
        return true;
      } else if (it.tags) {
        return it.tags.filter(t => {
          if (t.toLowerCase() == searchText) {            
            return true;
          }
        }).length > 0;
      }

    });
  }

}
