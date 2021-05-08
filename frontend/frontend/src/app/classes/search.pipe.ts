import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(items: string[], searchInput: string): any[]{     
        if(!searchInput) {
            return items;
        }
       searchInput = searchInput.toLowerCase();
       return items.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
}