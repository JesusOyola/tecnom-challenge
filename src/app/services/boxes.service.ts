import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  private readonly API_URL_WORKSHOP =
    'https://dev.tecnomcrm.com/api/v1/places/workshops';
  private readonly API_URL_SURVEY =
    'https://dev.tecnomcrm.com/api/v1/boxes/config/encuestas';

  private http = inject(HttpClient);

  getFirstWorkshop(): Observable<any> {
    return this.http
      .get<any[]>(this.API_URL_WORKSHOP)
      .pipe(map((workshops) => workshops[0]));
  }

  getSurveyConfig(): Observable<any> {
    return this.http.get<any>(this.API_URL_SURVEY);
  }
}
