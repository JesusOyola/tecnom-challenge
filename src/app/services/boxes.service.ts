import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoxesService {
  http = inject(HttpClient);
  private readonly API_URL =
    'https://dev.tecnomcrm.com/api/v1/places/workshops';

  getFirstWorkshop(): Observable<any> {
    return this.http
      .get<any[]>(this.API_URL)
      .pipe(map((workshops) => workshops[0]));
  }
}
