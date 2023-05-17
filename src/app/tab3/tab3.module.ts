import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3PageRoutingModule } from './tab3-routing.module';
import { Tab3Page } from './tab3.page';
import { MovieListComponent } from '../movie-list/movie-list.component';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, Tab3PageRoutingModule,ExploreContainerComponentModule],
  declarations: [Tab3Page, MovieListComponent],
})
export class Tab3PageModule {}
