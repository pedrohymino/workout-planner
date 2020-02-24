import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetConfig } from '@angular/material/bottom-sheet';
import { BotsheetComponent } from '../botsheet/botsheet.component';

const defaultConfig = new MatBottomSheetConfig();

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  config: MatBottomSheetConfig = {
    data: [
      {
        title: 'Linkein',
        subtitle: 'Professional social media',
        icon: '<i class="fab fa-linkedin"></i>',
        url: 'https://www.linkedin.com/in/pedrohymino/'
      },
      {
        title: 'Behance',
        subtitle: 'Portifolio',
        icon: '<i class="fab fa-behance-square"></i>',
        url: 'https://www.behance.net/pedrohymino'
      },
      {
        title: 'GitHub',
        subtitle: 'Frontend Developer',
        icon: '<i class="fab fa-github"></i>',
        url: 'https://github.com/pedrohymino/'
      },
    ]
  };
  constructor(private _botSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  openBottomSheet(): void {
    this._botSheet.open(BotsheetComponent, this.config);
  }

}