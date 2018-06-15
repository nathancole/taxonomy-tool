import { Component } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  taxonomy;
  selectedCategory;
  numberOfCategories = 0;
  numberOfVisibleCategories = 0;
  numberOfVisibleStyles = 0;
  numberOfPTNs = 0;
  numberOfVisiblePTNs = 0;

  constructor(private http: Http) {
    // this.http.get('./assets/taxonomy.json').subscribe(
    //   data => {
    //     this.taxonomy = data.json();
    //     this.selectedCategory = data.json();
    //     this.getStyles(this.taxonomy);
    //   },
    //   error => this.taxonomy = error
    // );
  }

  getStyles(category) {
    // console.log(category);
    // console.log(category.h1);
    this.numberOfCategories += 1;
    if (category.leftRailLabel != "") {
      this.numberOfVisibleCategories += 1;
    }
    if (category.ptn != "") {
      console.log(category.h1 + ", " + category.ptn);
      this.numberOfPTNs += 1;
      if (category.leftRailLabel != "") {
        this.numberOfVisiblePTNs += 1;
      }
    }
    // if (category) {
    //   if (category.categories) {
    for (let c of category.categories) {
      this.getStyles(c);
    };
    // }
    // }
  }

}
