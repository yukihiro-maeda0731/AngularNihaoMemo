import { Component, OnInit } from '@angular/core';
import { Memo } from '../model/memo';
import { MemoService } from '../Service/memo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //validation
  public inputJP: string = '';
  public readonly maxInputJapaneseLength: number = 30;

  memos: Memo[];
  memo: Memo = {
    japanese: '',
  };

  japaneseFlg: boolean = true;
  chineseFlg: boolean = true;

  constructor(private service: MemoService){}

  ngOnInit(): void {
    this.getMemos();
  }


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

  switchJapaneseDisplay() {
    if (this.japaneseFlg === true) {
      this.japaneseFlg = false;
    } else {
      this.japaneseFlg = true;
    }
  }

  switchChineseDisplay() {
    if (this.chineseFlg === true) {
      this.chineseFlg = false;
    } else {
      this.chineseFlg = true;
    }
  }

  deleteMemo(memo: Memo) {
    this.service.deleteMemo(memo.id).subscribe();
    console.log(memo.id);
    alert('消しました');
    this.getMemos();
  }

}
