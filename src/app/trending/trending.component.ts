import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../gifs-service.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

  trendingGifs: any;

  constructor(private service: GifsServiceService) { }

  ngOnInit() {
    this.service.trendingGifs()
    .subscribe((response: { [x: string]: any; } )=> {
      // tslint:disable-next-line: no-string-literal
      this.trendingGifs = response['data'];
    });
  }

}
