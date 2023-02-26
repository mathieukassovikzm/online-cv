import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { Store, StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { InMemoryDataService } from './services/in-memory-data.service';
import { reducers } from './store/app.state';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { SkillsEffects } from './store/skills/skills.effects';
import { NavigationModule } from './shared/components/navigation/navigation.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('appState', reducers),
    EffectsModule.forRoot(),
    EffectsModule.forFeature([
      SkillsEffects
    ]),
    StoreDevtoolsModule.instrument(),
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    NavigationModule
  ],
  providers: [
    Store
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
