import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestSnakeAppComponent } from './Components/test-snake-app/test-snake-app.component';




const routes: Routes = [
  { path: '', 
    redirectTo: 'home', 
    pathMatch: 'full' 
  },

  { path: 'snakegame',
    component: TestSnakeAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
