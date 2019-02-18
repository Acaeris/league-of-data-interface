import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Champion } from '../../models/champion';

/**
 * This class provides the Champion service with methods to read profile data
 */
@Injectable()
export class ChampionService {
    /**
     * Creates a new ProfileService with the injected Http.
     * @param {HttpClient} http - The injected Http.
     * @constructor
     */
    constructor(private http: HttpClient) {}

    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @param {number} id - ID of the champion to fetch.
     * @param {string} version - Version to fetch.
     * @return {Champion} The Observable for the HTTP request.
     */
    get(id: number, version: string): Observable<Champion> {
      // Still fetching mock data but should just need to point to backend to work now.
      return this.http.get<Champion>('assets/' + id + '.json')
        .pipe(
          catchError(this.handleError)
        );
    }

    /**
     * Handle HTTP error
     */
    private handleError (error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
