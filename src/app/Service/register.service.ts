import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

const springURL: string = environment.springURL;

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }


  transferImg(translatedPhrase: String): Observable<any> {
    return this.http.post(springURL, translatedPhrase,{
      headers: {
        "Content-Type": "text/plain; charset=UTF-8",
        //CORS対策
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Origin": "*"
      },
      //jsonではなく文字列で結果が欲しいので追記(なくても落ちはしないが余分なエラーメッセージ出る)
      'responseType': 'text'
    })
  }
}
