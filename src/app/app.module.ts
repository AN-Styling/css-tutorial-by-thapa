import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PositionPropertyComponent } from './components/center-div/position-property/position-property.component';
import { FlexboxComponent } from './components/center-div/flexbox/flexbox.component';
import { GridComponent } from './components/center-div/grid/grid.component';
import { CarousalComponent } from './components/carousal/carousal.component';
import { NewtonCradelComponent } from './components/newton-cradel/newton-cradel.component';

@NgModule({
  declarations: [
    AppComponent,
    PositionPropertyComponent,
    FlexboxComponent,
    GridComponent,
    CarousalComponent,
    NewtonCradelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
