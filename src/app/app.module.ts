import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidePanelModule } from './pages/side-panel/side-panel.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { NavigationModule } from './shared/components/navigation/navigation.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    // StoreDevtoolsModule.instrument(),
    NavigationModule,
    SidePanelModule,
    FooterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
