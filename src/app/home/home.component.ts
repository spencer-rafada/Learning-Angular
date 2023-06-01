import { Component, OnDestroy, OnInit } from '@angular/core';

import { Observable, Subscription, interval } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() {}

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObservable = Observable.create((observer) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('Count is greater than 3'));
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customIntervalObservable
      // can take multiple arguments to manipulate data
      .pipe(
        filter((data) => {
          return data > 0;
        }),
        map((data) => {
          return `Round ` + data;
        })
      )
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
          alert(error);
        },
        () => {
          console.log('complete');
        }
      );
  }

  // prevent memory leak
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }
}
