import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './read/read.component';
import { WriteComponent } from './write/write.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo: 'read'},
  {path:'read',component:ReadComponent },
  {path:'write',component: WriteComponent},
  // {path:'unauthenticated',component: },
  // {path:'changes',component: }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
