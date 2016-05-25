import { Jsonp } from '@angular/http';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
export declare class WikiService {
    private jsonp;
    constructor(jsonp: Jsonp);
    search(term: string): Observable<any[]>;
}
