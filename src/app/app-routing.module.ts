import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChocolateComponent } from './comps/chocolate/chocolate.component';
import { IceCreamComponent } from './comps/ice-cream/ice-cream.component';
import { DataTitleComponent } from './comps/data-title/data-title.component';
import { CanActivateIceCreamLinkService } from './services/guards/can-activate-ice-cream-link.service';
import { JsonUserComponent } from './comps/json-user/json-user.component';
import { LoginComponent } from './comps/login/login.component';
import { AmericansComponent } from './comps/americans/americans.component';
import { NativeComponent } from './comps/americans/native/native.component';
import { BlacksComponent } from './comps/americans/blacks/blacks.component';
import { ImmigrantsComponent } from './comps/americans/immigrants/immigrants.component';
import { ReactiveformsComponent } from './comps/reactiveforms/reactiveforms.component';
import { ReactiveFormGroupsComponent } from './comps/reactive-form-groups/reactive-form-groups.component';
import { RoutesComponent } from './comps/routes/routes.component';
import { FormsNavComponent } from './comps/forms-nav/forms-nav.component';
import { SelectsComponent } from './comps/selects/selects.component';
import { CompsformArrayComponent } from './compsform-array/compsform-array.component';
import { PipeComponent } from './comps/pipe/pipe.component';
import { DirectiveComponent } from './comps/directive/directive.component';
import { MaterialComponent } from './comps/material/material.component';

const routes: Routes = [
  { path: 'routes', component:RoutesComponent,children:[
      { path: 'americans', component:AmericansComponent, children:[
          { path: 'natives', component:NativeComponent},
          { path: 'blacks', component:BlacksComponent},
          { path: 'immigrants', component:ImmigrantsComponent},
      ] },
      { path: 'chocolate', component:ChocolateComponent},
      { path: 'formgroup', component:ReactiveFormGroupsComponent},
      { path: 'login', component:LoginComponent},
      { path: 'ice-cream', component:IceCreamComponent, canActivate:[CanActivateIceCreamLinkService]},
      { path: 'json-user/:id', component:JsonUserComponent},
      { path: 'data-title', component:DataTitleComponent, data:{title:'what is going here!!!!'}},
  ]},
  { path: 'forms-nav', component:FormsNavComponent,children:[
      { path: 'forms', component:ReactiveformsComponent, },
      { path: 'formgroup', component:ReactiveFormGroupsComponent, },
      { path: 'formselect', component:SelectsComponent, },
      { path: 'formarray', component:CompsformArrayComponent, },

  ] },
  { path: 'pipes', component:PipeComponent},
  { path: 'directives', component:DirectiveComponent},
  { path: 'material', component:MaterialComponent },
  { path: '', redirectTo:'/', pathMatch:'full'},
  { path: '**', redirectTo:'/', pathMatch:'full'},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
