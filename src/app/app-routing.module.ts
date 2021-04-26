import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyservicesComponent } from './components/template/myservices/myservices.component';

const routes: Routes = [

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
