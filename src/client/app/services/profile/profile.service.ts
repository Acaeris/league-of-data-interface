import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

/**
 * This class provides the Profile service with methods to read profile data
 */
@Injectable()
export class ProfileService {
    /**
     * Creates a new ProfileService with the injected Http.
     * @param {Http} http - The injected Http.
     * @constructor
     */
    constructor(private http: Http) {}

    /**
     * Returns an Observable for the HTTP GET request for the JSON resource.
     * @return {string} The Observable for the HTTP request.
     */
    get(): Observable<string> {
        return this.http.get('assets/profile.json')
            .map((res: Response) => res.json())
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
