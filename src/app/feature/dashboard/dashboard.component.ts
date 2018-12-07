import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { IntervalObservable } from "rxjs/observable/IntervalObservable";

import { Posts } from '../models/posts.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  url = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
  loadInterval = 5000000;
  posts: Posts[];
  modalData: Posts;
  searchText = '';
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.dashboardService.getPostsDetails(this.url, this.loadInterval)
      .first()
      .subscribe((data) => {
        this.posts = data;
      });

    // get our data every subsequent 10 seconds
    IntervalObservable.create(this.loadInterval)
      .subscribe(() => {
        this.dashboardService.getPostsDetails(this.url, this.loadInterval)
          .subscribe(data => {
            this.posts = data;
          });
      });
  }

  openModal(post: Posts) {
    this.modalData = post;
  }

}
