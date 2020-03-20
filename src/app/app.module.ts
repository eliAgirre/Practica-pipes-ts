import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecimalListComponent } from './decimal-list/decimal-list.component';
import { DecimalPipePipe } from './decimal-pipe.pipe';
import { SliceListComponent } from './slice-list/slice-list.component';
import { SlicePipePipe } from './slice-pipe.pipe';
import { CurrencyListComponent } from './currency-list/currency-list.component';
import { CurrencyPipePipe } from './currency-pipe.pipe';
import { DateListComponent } from './date-list/date-list.component';
import { DatePipePipe } from './date-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DecimalListComponent,
    DecimalPipePipe,
    SliceListComponent,
    SlicePipePipe,
    CurrencyListComponent,
    CurrencyPipePipe,
    DateListComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
