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
  private readonly AUTH_HEADER = 'Basic ' + btoa('max@tecnom.com.ar' + ':' + 'b0x3sApp');
  private http = inject(HttpClient);
  


  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Authorization': this.AUTH_HEADER,
      'Content-Type': 'application/json',
    });
  }

  
  getFirstWorkshop(): Observable<any> {
    return this.http
      .get<any[]>(this.API_URL_WORKSHOP, { headers: this.getHeaders() })
      .pipe(map((workshops) => workshops[0]));
  }

  
  getSurveyConfig(): Observable<any> {
    return this.http
      .get<any>(this.API_URL_SURVEY, { headers: this.getHeaders() });
  }
}

