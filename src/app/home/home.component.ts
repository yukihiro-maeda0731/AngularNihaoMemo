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
  totalPages: number = 0;
  currentPage: number = 0;
  japaneseFlg: boolean = true;
  chineseFlg: boolean = true;

  constructor(private service: MemoService){}

  /**
   * 初期表示時、メモを取得。デフォルトは0ページ。
   */
  ngOnInit(): void {
    this.getMemos(this.currentPage);
  }

  /**
   * 「登録」押下時、メモを登録。
   */
  registerMemo(){
    this.memo.japanese = this.inputJP;
    this.service.registerMemo(this.memo)
    .subscribe();
    alert('登録しました');
    this.getMemos(this.currentPage);
  }

  /**
   * メモ取得。
   */
  getMemos(page: number) {
    this.service.getMemos(this.currentPage).subscribe(data => {
      this.memos = data.content;
      this.totalPages = data.totalPages;
    });
  }

  /**
   * 「日本語表示切替」押下時、表示/非表示切替。
   */
  switchJapaneseDisplay() {
    if (this.japaneseFlg === true) {
      this.japaneseFlg = false;
    } else {
      this.japaneseFlg = true;
    }
  }

  /**
   * 「中国語表示切替」押下時、表示/非表示切替。
   */
  switchChineseDisplay() {
    if (this.chineseFlg === true) {
      this.chineseFlg = false;
    } else {
      this.chineseFlg = true;
    }
  }

  /**
   * 「削除」押下時、メモを削除。
   */
  deleteMemo(memo: Memo) {
    this.service.deleteMemo(memo.id).subscribe();
    console.log(memo.id);
    alert('消しました');
    this.getMemos(this.currentPage);
  }

  /**
   * 「前へ」押下時、1ページ後ろのページに応じてメモを取得。
   */
  prevMemo(){
    if(this.currentPage !== 0){
      this.currentPage = this.currentPage -1;
      this.getMemos(this.currentPage);
    }
  }

  /**
   * 「次へ」押下時、1ページ先のページに応じてメモを取得。
   */
  nextMemo(){
    if(this.currentPage !== this.totalPages -1){
      this.currentPage = this.currentPage +1;
      this.getMemos(this.currentPage);
    }
  }

  /**
   * ページ押下時、ページに応じてメモを取得。
   */
  clickPage(i: number){
    this.currentPage = i;
    this.getMemos(this.currentPage);
  }

  /**
   * ページ件数を動的に表示する。
   */
  pageCounter(i: number){
    return new Array(i);
  }

}
