import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { TestServieService } from './test-servie.service';
import { TestPipesPipe } from './test-pipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    TestPipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TestServieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
