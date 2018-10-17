import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Summoner } from '../../models/summoner';

/**
 * This class provides the Summoner service with methods to read profile data
 */
@Injectable()
export class SummonerService {
    /**
     * Creates a new ProfileService with the injected Http.
     * @param {HttpClient} http - The injected Http.
     * @constructor
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {Summoner} The Observable for the HTTP request.
     */
    get(): Observable<Summoner> {
        return this.http.get<Summoner>('assets/summoner.json')
          .pipe(
            catchError(this.handleError)
          );
    }

    /**
     * Handle HTTP error
     */
    private handleError (error: any) {
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
