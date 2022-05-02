import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IntroductionComponent } from './introduction/introduction.component';
import { MenuComponent } from './menu/menu.component';
import { MyskillsComponent } from './myskills/myskills.component';

const routes: Routes = [
  {path:'', component: IntroductionComponent},
  {path:'', component: MyskillsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
