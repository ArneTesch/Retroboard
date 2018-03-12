import { Component, OnInit } from '@angular/core';
import { RetroSandbox } from '../../sandboxes/retro.sandbox';
import { Observable } from 'rxjs/Observable';
import { RetroItem } from '../../entities/retro-item';
import { DragulaService } from 'ng2-dragula';
import { shareReplay } from 'rxjs/operators';
import 'rxjs/add/operator/shareReplay';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-topics-overview',
  templateUrl: './topics-overview.component.html',
  styleUrls: ['./topics-overview.component.scss'],
})
export class TopicsOverviewComponent implements OnInit {

  retroItems$: Observable<Array<RetroItem>>;
  keepDoing$: Observable<Array<RetroItem>>;
  startDoing$: Observable<Array<RetroItem>>;
  stopDoing$: Observable<Array<RetroItem>>;
  id$;

  boardId;
  selectedItem: RetroItem;
  updatedItem: RetroItem;

  constructor(private sandbox: RetroSandbox,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private dragulaService: DragulaService) {

    dragulaService.drop
      .pipe(
        shareReplay(1),
      )
      .subscribe((value) => {

        const [bagName, el, targetBag] = value;
        const newCategory = targetBag.id;
        this.selectedItem = JSON.parse(el.dataset.el);
        console.log(this.selectedItem);

        this.updatedItem = { ...this.selectedItem, category: newCategory };
        console.log(this.updatedItem);

        // this.id = this.activatedRoute.snapshot.params.id;
        this.sandbox.updateRetroItem(this.updatedItem, this.boardId);
      });
  }

  ngOnInit() {
    // Custom rxjs operator
    const filterByCategory = (category: string) => (source: Observable<Array<RetroItem>>) =>
      new Observable<Array<RetroItem>>(observer => {
        return source.subscribe({
          next(x: Array<RetroItem>) {
            observer.next(x.filter(item => {
              return item.category === category;
            }));
          },
          error(err) {
            observer.error(err);
          },
          complete() {
            observer.complete();
          },
        });
      });

    this.boardId = this.activatedRoute.snapshot.params.id;
    this.retroItems$ = this.sandbox.getAll(`/boards/${this.boardId}/retroitems/`).shareReplay(1);

    // this.id$ = this.activatedRoute.params.pipe(
    //   map(params => params['id']),
    // );
    //
    // this.retroItems$ = this.id$.pipe(
    //   switchMap(id => this.sandbox.getAll(`/boards/${id}/retroitems/`).shareReplay(1)),
    // );

    this.keepDoing$ = this.retroItems$
      .pipe(
        filterByCategory('keepDoing'),
      );

    this.startDoing$ = this.retroItems$
      .pipe(
        filterByCategory('startDoing'),
      );

    this.stopDoing$ = this.retroItems$
      .pipe(
        filterByCategory('stopDoing'),
      );
  }

  handleDelete(item: { key: string }) {
    this.sandbox.deleteItem(item.key, this.boardId);
  }

  createTopic(retroItem: RetroItem) {
    this.sandbox.createRetroItem(retroItem, this.boardId);
  }

  navigate() {
    this.router.navigate(['/']);
  }
}
