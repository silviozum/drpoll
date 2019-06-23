import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Material } from './material';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Main } from './main/main.component';
import { EditLabelComponent } from './edit-label/edit-label.component';
import { ChoicePollComponent } from './choice-poll/choice-poll.component';
import { ContentPollComponent } from './content-poll/content-poll.component';



@NgModule({
  declarations: [
    AppComponent,
    Main,
    EditLabelComponent,
    ChoicePollComponent,
    ContentPollComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
