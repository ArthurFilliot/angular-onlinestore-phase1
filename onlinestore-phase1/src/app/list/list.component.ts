import { CategoriesService, Category } from './../categories.service';
import { Component, OnInit, Input, AfterContentInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {

  @Input('categoryid') categoryid;

  category

  nbperpage: number = 5

  currentpage: number = 1

  unid = Math.random()

  constructor(private categoriesService:CategoriesService) { 
    this.category = categoriesService.nullCategory()
  }

  load() {
    this.categoriesService.getData(this.categoryid).subscribe(data => {
      this.category=data
      console.log(this.category)
    })
  }

  ngOnInit(): void {
    console.log("oninit")
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("changes from list:" + this.unid)
    this.load();
    console.log(this.category)
  }

  onClick() {
    console.log(this.currentpage+"-"+this.nbperpage)
  }

}
