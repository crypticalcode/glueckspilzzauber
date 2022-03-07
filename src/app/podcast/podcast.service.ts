import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory,
} from 'ngrx-data';

export interface Podcast {}

// @Injectable({ providedIn: 'root' })
// export class PodcastService extends EntityCollectionServiceBase<Podcast> {
//   constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
//     super('Podcast', serviceElementsFactory);
//   }
// }
