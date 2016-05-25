import {Injectable} from '@angular/core';
import {URLSearchParams, Jsonp} from '@angular/http';
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

@Injectable()
export class WikiService{
  constructor(private jsonp: Jsonp) {}

  // source: https://github.com/born2net/ng2Boilerplate/blob/master/src/services/WikiService.ts
  search (term: string): Observable<any[]> {
    var search = new URLSearchParams();
    search.set('action', 'opensearch');
    search.set('search', term);
    search.set('format', 'json');
    return this.jsonp
        .get('http://en.wikipedia.org/w/api.php?callback=JSONP_CALLBACK', {search})
        .map(res => res.json());
  }
}
