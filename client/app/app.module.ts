import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/* App Root */
import { AppComponent }   from './app.component';

/* Feature Modules */
import { CoreModule }     from './core/core.module';
import { routing }        from './app.routing';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule,
    routing
  ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
