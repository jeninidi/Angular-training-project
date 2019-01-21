import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestSnakeAppComponent } from './Components/test-snake-app/test-snake-app.component';
import {Router} from '@angular/router';

// this.router= Router;
// this.router.navigateByUrl('/snakegame');


const routes: Routes = [

  { path: 'snakegame',
    component: TestSnakeAppComponent
  },
  //  { path: '',
  //    redirectTo: '/',
  //    pathMatch: 'full'
  //  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 

}
