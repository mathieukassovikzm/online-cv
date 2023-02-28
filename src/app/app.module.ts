import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { NavigationModule } from './shared/components/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    StoreDevtoolsModule.instrument(),
    NavigationModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
