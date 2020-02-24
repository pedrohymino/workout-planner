import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-botsheet',
  templateUrl: './botsheet.component.html',
  styleUrls: ['./botsheet.component.scss']
})
export class BotsheetComponent implements OnInit {
  constructor(
    private _botSheetRef: MatBottomSheetRef<BotsheetComponent>,
  ) {}
  
  list = [];

  ngOnInit(): void {
    this.list = this._botSheetRef.containerInstance.bottomSheetConfig.data;
    console.log(this.list)
  }

  closeSheet(): void {
    this._botSheetRef.dismiss();
  }
}