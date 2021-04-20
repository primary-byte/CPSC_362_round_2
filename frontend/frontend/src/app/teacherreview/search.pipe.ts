import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name:'search'
})
export class SearchPipe implements PipeTransform {
    transform(teachers: string[], searchInput: string): any[]{     
        if(!searchInput) {
            return  teachers;
        }
       searchInput = searchInput.toLowerCase();
       return teachers.filter(
           x =>x.toLowerCase().includes(searchInput)
       )
     }
}