import { Injectable } from '@angular/core';
import { HttpHelperService } from 'src/app/core/services/http-helper.service';
import { Observable } from 'rxjs';
import { Posts } from '../models/posts.model';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private httpHelper: HttpHelperService) { }

  getPostsDetails(url: string, interval: number) {
    return this.httpHelper.get(url);
  }
}
