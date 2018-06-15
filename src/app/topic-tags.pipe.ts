import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'topicTags'
})
export class TopicTagsPipe implements PipeTransform {

  transform(value: any[]): any {
    var tags: string[] = [];
    value.forEach(function (topic) {      
      if (topic.tags) {
        topic.tags.forEach(function (tag) {
          console.log(tag);

          if (!tags.includes(tag)) {
            tags.push(tag);
          }

        });
      }
    });
    return tags;
  }

}
