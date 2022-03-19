import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';


const routes: Routes = [
  {path: 'person', loadChildren: () =>
   import('./person/person.module').then((m) => m.PersonModule )
}

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class PrivateModule { }
