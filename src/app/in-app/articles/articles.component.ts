import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IGX_CARD_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { ArticlesSource3Type } from '../../models/travel-app/articles-source3-type';
import { ArticlesSource1Type } from '../../models/travel-app/articles-source1-type';
import { SelectedArticlesType } from '../../models/travel-app/selected-articles-type';
import { ArticlesSource4Type } from '../../models/travel-app/articles-source4-type';
import { ArticlesSource2Type } from '../../models/travel-app/articles-source2-type';
import { TravelAppService } from '../../services/travel-app.service';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, NgFor],
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public travelAppArticlesSource1: ArticlesSource1Type[] = [];
  public travelAppArticlesSource2: ArticlesSource2Type[] = [];
  public travelAppArticlesSource3: ArticlesSource3Type[] = [];
  public travelAppArticlesSource4: ArticlesSource4Type[] = [];
  public travelAppSelectedArticles: SelectedArticlesType[] = [];

  constructor(
    private travelAppService: TravelAppService,
  ) {}

  ngOnInit() {
    this.travelAppService.getArticlesSource1().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppArticlesSource1 = data,
      error: (_err: any) => this.travelAppArticlesSource1 = []
    });
    this.travelAppService.getArticlesSource2().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppArticlesSource2 = data,
      error: (_err: any) => this.travelAppArticlesSource2 = []
    });
    this.travelAppService.getArticlesSource3().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppArticlesSource3 = data,
      error: (_err: any) => this.travelAppArticlesSource3 = []
    });
    this.travelAppService.getArticlesSource4().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppArticlesSource4 = data,
      error: (_err: any) => this.travelAppArticlesSource4 = []
    });
    this.travelAppService.getSelectedArticles().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppSelectedArticles = data,
      error: (_err: any) => this.travelAppSelectedArticles = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
