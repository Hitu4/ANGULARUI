import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacultyPageComponent } from './faculty-page/faculty-page.component';
import { EventsComponent } from './events/events.component';
import { InfraComponent } from './infra/infra.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'infra', component: InfraComponent },
  { path: 'events', component: EventsComponent },
  { path: 'faculty', component: FacultyPageComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
