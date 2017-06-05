import { Injectable } from '@angular/core';
import { Http, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Champion } from '../../models/champion';

/**
 * This class provides the Champion service with methods to read profile data
 */
@Injectable()
export class ChampionService {
  /**
   * Creates a new ProfileService with the injected Http.
   * @param {Http} http - The injected Http.
   * @constructor
   */
  constructor(private http: Http) {}

  /**
   * Returns an Observable for the HTTP GET request for the JSON resource.
   * @param {number} id - ID of the champion to fetch.
   * @param {string} version - Version to fetch.
   * @return {Champion} The Observable for the HTTP request.
   */
  get(id: number, version: string): Observable<Champion> {
    let params: URLSearchParams = new URLSearchParams();
    params.set('id', id.toString());
    params.set('v', version);
    return this.http.get('http://192.168.56.101/app_dev.php/champion/id', {
        search: params
      })
      .map(res => <Champion>res.json())
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
