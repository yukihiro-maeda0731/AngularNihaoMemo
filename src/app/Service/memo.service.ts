import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Memo } from '../model/memo';

const springURL: string = environment.springURL;

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  constructor(private http: HttpClient) { }

  registerMemo(memo: Memo): Observable<any> {
    return this.http.post(springURL, memo,{
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*"
      }
    })
  }

  getMemos(): Observable<any> {
    return this.http.get(springURL);
  }

  deleteMemo(id: number): Observable<any> {
    return this.http.delete(`${springURL}/${id}`)
  }

}
