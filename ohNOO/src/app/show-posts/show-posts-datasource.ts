import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ShowPostsItem {
  question: string;
  date: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ShowPostsItem[] = [
  {date: '02/02/2021',question: 'Why ants with hats?'},
  {date: '01/02/1914', question: 'Whats 2 + 2?'},
  {date: '01/02/1914', question: 'How do you divide by zero?'},
  {date: '01/02/1914', question: 'How do you spell deveide?'},
];

/**
 * Data source for the ShowPosts view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ShowPostsDataSource extends DataSource<ShowPostsItem> {
  data: ShowPostsItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ShowPostsItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-{datee). If you're using server-{datee pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ShowPostsItem[]): ShowPostsItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-{datee). If you're using server-{datee sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ShowPostsItem[]): ShowPostsItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'question': return compare(a.question, b.question, isAsc);
        case 'date': return compare(+a.date, +b.date, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example{date/question columns (for client-{datee sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
