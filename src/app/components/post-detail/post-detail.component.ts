import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { Post } from 'src/app/models/post';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  private routeSub: Subscription = new Subscription();
  private id: number = 0;
  
  post?: Post;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    
  }

  ngOnInit(): void {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params['id'];
    })
    this.initData();
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  initData(): void {
    this.http.get<Post>("https://localhost:7161/api/post/" + this.id).subscribe({
      next: (data: Post) => {
        this.post = data;
        console.log(this.post);
      }
    })
  }

}
