import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(courses: string[], searchInput: string): any[]{     
        if(!searchInput) {
            return  courses;
        }
       searchInput = searchInput.toLowerCase();
       return courses.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
}