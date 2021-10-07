import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
//  {
//    path: '',
//    component: NameComponent
//  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {

 }

 //ng g m path/nombre --flat no genera carpeta