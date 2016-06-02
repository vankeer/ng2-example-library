import { Jsonp } from '@angular/http';
import { IObservable } from "rxjs/Observable";
import "rxjs/add/operator/map";
export declare class WikiService {
    private jsonp;
    constructor(jsonp: Jsonp);
    search(term: string): IObservable<any[]>;
}
