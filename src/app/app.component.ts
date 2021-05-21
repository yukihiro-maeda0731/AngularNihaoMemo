import { Component, SystemJsNgModuleLoader } from '@angular/core';
import { Memo } from './model/memo';
import { MemoService } from './Service/memo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //validation
  public inputJP: string = '';
  public readonly maxInputJapaneseLength: number = 30;

  constructor(private service: MemoService){}

  ngOnInit(): void {
    this.getMemos();
  }

  memos: Memo[];
  memo: Memo = {
    japanese: '',
  };

  registerMemo(){
    this.memo.japanese = this.inputJP;
    this.service.registerMemo(this.memo)
    .subscribe();
    alert('登録しました');
    this.getMemos();
  }

  getMemos() {
    this.service.getMemos().subscribe(data => {
      this.memos = data;
    });
  }

  deleteMemo(memo: Memo) {
    this.service.deleteMemo(memo.id).subscribe();
    console.log(memo.id);
    alert('消しました');
    this.getMemos();
  }

}
