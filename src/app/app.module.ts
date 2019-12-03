import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChocolateComponent } from './comps/chocolate/chocolate.component';
import { IceCreamComponent } from './comps/ice-cream/ice-cream.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { JsonUserComponent } from './comps/json-user/json-user.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './comps/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmericansComponent } from './comps/americans/americans.component';
import { NativeComponent } from './comps/americans/native/native.component';
import { BlacksComponent } from './comps/americans/blacks/blacks.component';
import { ImmigrantsComponent } from './comps/americans/immigrants/immigrants.component';
import { BirthYearPipe } from './comps/pipes/birth-year.pipe';
import { StudentsComponent } from './comps/students/students.component';
import { ReactiveformsComponent } from './comps/reactiveforms/reactiveforms.component';
import { ReactiveFormGroupsComponent } from './comps/reactive-form-groups/reactive-form-groups.component';
import { RoutesComponent } from './comps/routes/routes.component';
import { FormsNavComponent } from './comps/forms-nav/forms-nav.component';
import { SelectsComponent } from './comps/selects/selects.component';
import { CompsformArrayComponent } from './compsform-array/compsform-array.component';
import { PipeComponent } from './comps/pipe/pipe.component';
import { CapitalizePipe } from './comps/pipes/capitalize.pipe';
import { FilterPipe } from './comps/pipes/filter.pipe';
import { AddAstringArrayPipe } from './comps/pipes/add-astring-array.pipe';
import { HighlightDirective } from './comps/directives/highlight.directive';
import { DirectiveComponent } from './comps/directive/directive.component';
import { InvisibleDirective } from './comps/directives/invisible.directive';


@NgModule({
  declarations: [
    AppComponent,
    ChocolateComponent,
    IceCreamComponent,
    DataTitleComponent,
    JsonUserComponent,
    LoginComponent,
    AmericansComponent,
    NativeComponent,
    BlacksComponent,
    ImmigrantsComponent,
    BirthYearPipe,
    StudentsComponent,
    ReactiveformsComponent,
    ReactiveFormGroupsComponent,
    RoutesComponent,
    FormsNavComponent,
    SelectsComponent,
    CompsformArrayComponent,
    PipeComponent,
    CapitalizePipe,
    FilterPipe,
    AddAstringArrayPipe,
    HighlightDirective,
    DirectiveComponent,
    InvisibleDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
