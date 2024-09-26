import { NgFor } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxButtonDirective, IgxIconButtonDirective, IgxIconComponent, IgxOverlayOutletDirective, IgxRippleDirective, IgxToggleActionDirective, IgxToggleDirective } from 'igniteui-angular';
import { Subject, takeUntil } from 'rxjs';
import { SelectedArticlesType } from '../../models/travel-app/selected-articles-type';
import { ImageSet1Type } from '../../models/travel-app/image-set1-type';
import { ImageSet2Type } from '../../models/travel-app/image-set2-type';
import { DestinationsType } from '../../models/travel-app/destinations-type';
import { TravelAppService } from '../../services/travel-app.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [IGX_CARD_DIRECTIVES, IGX_LIST_DIRECTIVES, IgxToggleActionDirective, IgxOverlayOutletDirective, IgxIconButtonDirective, IgxButtonDirective, IgxRippleDirective, IgxToggleDirective, IgxIconComponent, RouterLink, NgFor],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnDestroy {
  private destroy$: Subject<void> = new Subject<void>();
  public travelAppSelectedArticles: SelectedArticlesType[] = [];
  public travelAppDestinations: DestinationsType[] = [];
  public travelAppImageSet1: ImageSet1Type[] = [];
  public travelAppImageSet2: ImageSet2Type[] = [];

  constructor(
    private travelAppService: TravelAppService,
  ) {}

  ngOnInit() {
    this.travelAppService.getSelectedArticles().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppSelectedArticles = data,
      error: (_err: any) => this.travelAppSelectedArticles = []
    });
    this.travelAppService.getDestinations().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppDestinations = data,
      error: (_err: any) => this.travelAppDestinations = []
    });
    this.travelAppService.getImageSet1().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppImageSet1 = data,
      error: (_err: any) => this.travelAppImageSet1 = []
    });
    this.travelAppService.getImageSet2().pipe(takeUntil(this.destroy$)).subscribe({
      next: (data) => this.travelAppImageSet2 = data,
      error: (_err: any) => this.travelAppImageSet2 = []
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
