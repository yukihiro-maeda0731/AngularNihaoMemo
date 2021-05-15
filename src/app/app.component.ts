import { Component } from '@angular/core';
import { RegisterService } from './Service/register.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private service: RegisterService){}
  // Springから返ってくる日→中の言葉を格納
  result: String = ""; 

  registerPhrase(translatedPhrase: String){
    this.service.transferImg(translatedPhrase).subscribe(
      data => this.result = data,
      error => console.log(error)
    );
  }
}
