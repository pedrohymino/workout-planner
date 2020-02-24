import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

// Default component
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
// Shared components
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BotsheetComponent } from './shared/components/botsheet/botsheet.component';

// Pages
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { WorkoutComponent } from './pages/workout/workout.component';

// Material design component
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

let MatModules = [
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatBottomSheetModule,
  MatListModule,
  MatTabsModule,
  MatGridListModule,
  MatCardModule
]

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    WorkoutComponent,
    HeaderComponent,
    FooterComponent,
    BotsheetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    ...MatModules
  ],
  exports: [
    ...MatModules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }