import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  { path: '', redirectTo:'main' ,pathMatch: 'full' },
  { path: 'main', component: MainLayoutComponent },
  { path:'form', component: MyFormComponent },
  { path:'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
