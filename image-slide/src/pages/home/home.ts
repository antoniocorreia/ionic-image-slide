import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImageSearchProvider } from '../../providers/image-search/image-search';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  search:string;
  slides:any[];
  mySlideOptions = {
    pager:true
  };

  constructor(public navCtrl: NavController, public searchProvider: ImageSearchProvider) {

  }

  doSearch() {
    console.log('searching for '+this.search);
    this.searchProvider.search(this.search).subscribe(data => {
      console.log(data);
      this.slides = data;
    });
  }

}
