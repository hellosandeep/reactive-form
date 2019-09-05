import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/**
 * START
 * Angular Reactive Form Module.
 * import only if want to use Reactive Form.
 */
import { ReactiveFormsModule } from '@angular/forms';
/**
 * START
 * Material Module.
 * import only if want to use material
 */
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
//END

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
