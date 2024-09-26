import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ArticlesSource3Type } from '../models/travel-app/articles-source3-type';
import { ArticlesSource1Type } from '../models/travel-app/articles-source1-type';
import { SelectedArticlesType } from '../models/travel-app/selected-articles-type';
import { ImageSet1Type } from '../models/travel-app/image-set1-type';
import { ImageSet2Type } from '../models/travel-app/image-set2-type';
import { DestinationsType } from '../models/travel-app/destinations-type';
import { ArticlesSource4Type } from '../models/travel-app/articles-source4-type';
import { ArticlesSource2Type } from '../models/travel-app/articles-source2-type';
import { TravelApp } from '../static-data/travel-app';

@Injectable({
  providedIn: 'root'
})
export class TravelAppService {
  public getSelectedArticles(): Observable<SelectedArticlesType[]> {
    return of(TravelApp['SelectedArticlesType']);
  }

  public getDestinations(): Observable<DestinationsType[]> {
    return of(TravelApp['DestinationsType']);
  }

  public getImageSet1(): Observable<ImageSet1Type[]> {
    return of(TravelApp['ImageSet1Type']);
  }

  public getImageSet2(): Observable<ImageSet2Type[]> {
    return of(TravelApp['ImageSet2Type']);
  }

  public getArticlesSource1(): Observable<ArticlesSource1Type[]> {
    return of(TravelApp['ArticlesSource1Type']);
  }

  public getArticlesSource2(): Observable<ArticlesSource2Type[]> {
    return of(TravelApp['ArticlesSource2Type']);
  }

  public getArticlesSource3(): Observable<ArticlesSource3Type[]> {
    return of(TravelApp['ArticlesSource3Type']);
  }

  public getArticlesSource4(): Observable<ArticlesSource4Type[]> {
    return of(TravelApp['ArticlesSource4Type']);
  }
}
