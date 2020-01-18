import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestServieService } from './test-servie.service';
import { ApiService } from './api.service';
import { TestPipesPipe, TestSumPipe } from './test-pipes.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestPipesPipe,
    TestSumPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule
  ],
  providers: [
    TestServieService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
