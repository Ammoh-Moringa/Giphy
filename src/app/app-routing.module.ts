import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GifsServiceService } from './gifs-service.service';
import { GiphyComponent } from './giphy/giphy.component';
import { RandomComponent } from './random/random.component';
import { TrendingComponent } from './trending/trending.component';


const routes: Routes = [
  {path: '', component: TrendingComponent},
  {path: 'random', component: RandomComponent},
  {path: 'search', component: GiphyComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  randomGif: any;

  constructor(private servive: GifsServiceService) { }

  ngOnInit() {
    this.servive.randomGif()
    .subscribe((response:{ [x: string]: any; }) => {
      // tslint:disable-next-line: no-string-literal
      this.randomGif = response['data'];
    });
  }}
