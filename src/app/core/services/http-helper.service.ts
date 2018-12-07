import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/Rx';

import { Posts } from 'src/app/feature/models/posts.model';

@Injectable()
export class HttpHelperService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<Posts[]> {
    return this.http
      .get<Posts[]>(url);
  }
}
