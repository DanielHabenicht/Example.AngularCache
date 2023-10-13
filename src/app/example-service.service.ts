import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ExampleServiceService {
  private _data: Observable<Fact> | undefined = undefined;
  constructor(private httpClient: HttpClient) {}

  public getFact(): Observable<Fact> {
    return this.httpClient.get<Fact>('https://catfact.ninja/fact');
  }

  public getFactCached(): Observable<Fact> {
    if (this._data) return this._data;

    this._data = this.httpClient
      .get<Fact>('https://catfact.ninja/fact')
      .pipe(shareReplay());
    return this._data;
  }
}

export interface Fact {
  fact: string;
  length: number;
}
