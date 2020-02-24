import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsheetComponent } from './botsheet.component';

describe('BotsheetComponent', () => {
  let component: BotsheetComponent;
  let fixture: ComponentFixture<BotsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
