import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Summoner } from '../../models/summoner';

/**
 * This class provides the Summoner service with methods to read profile data
 */
@Injectable()
export class SummonerService {
    /**
     * Creates a new ProfileService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(private http: Http) {}

    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @param {number} id - ID of the summoner to fetch.
     * @param {string} region - Region to search in.
     * @return {Summoner} The Observable for the HTTP request.
     */
    get(id: number, region: string): Observable<Summoner> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('id', id.toString());
        params.set('region', region);

        return this.http.get('http://127.0.0.1/app_dev.php/champion/id', {
            search: params
        })
            .map(res => <Summoner>res.json())
            .catch(this.handleError);
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
