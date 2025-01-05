import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssRendererDirective } from './directives/css-renderer.directive';
import { TolowercaseDirective } from './directives/tolowercase.directive';
import { NavbarComponent } from './directives/navbar/navbar.component';
import { NavbarDropdownDirective } from './directives/navbar-dropdown.directive';
import { NavbarLiDirective } from './directives/navbar-li.directive';

@NgModule({
  declarations: [
    AppComponent,
    CssRendererDirective,
    TolowercaseDirective,
    NavbarComponent,
    NavbarDropdownDirective,
    NavbarLiDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
