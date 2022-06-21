import { Host, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarthComponent } from './earth/earth.component';
import { HomeComponent } from './home/home.component';
import { LeansflaresComponent } from './leansflares/leansflares.component';
import { ThreeComponent } from './three/three.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'cube', component:ThreeComponent},
  {path:'earth', component:EarthComponent},
  {path:'third', component:LeansflaresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
