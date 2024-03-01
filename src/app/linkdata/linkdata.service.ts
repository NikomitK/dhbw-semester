import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Link } from './link';
import { Observable, catchError, of } from 'rxjs';
import * as courselinks from '../../assets/courselinks.json';

@Injectable({
  providedIn: 'root'
})
export class LinkdataService {
  // https://raw.githubusercontent.com/FabianSig/public-html/main/src/app/shared/links.json
  private linkUrl = 'https://raw.githubusercontent.com/NikomitK/dhbw-semester/main/src/assets/';
  private assetsUrl = '../../assets/'
  constructor(private httpClient: HttpClient) { }

  getLinks(filename: String): Observable<Link[]> {
    return this.httpClient.get<Link[]>(this.linkUrl + filename).pipe(catchError(err => {
      return this.getLocalLinks(filename);
    }));
  }

  getLocalLinks(filename: String): Observable<Link[]> {
    return this.httpClient.get<Link[]>(this.assetsUrl + filename)
  }

}
