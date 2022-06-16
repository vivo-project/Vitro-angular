import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IndividualResolver implements Resolve<any> {
  constructor(private readonly http: HttpClient) {}

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const collection = route.paramMap.get('collection') as string;
    const resource = route.paramMap.get('resource') as string;

    return this.http
      .get(
        `${environment.apiBaseUrl}/rest/${environment.restVersion}/${collection}/resource:${resource}`,
        {
          headers: { Accept: 'application/json' },
        },
      )
      .pipe(map((response: any) => response.result[0]));
  }
}
