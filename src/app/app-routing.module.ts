import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutMeComponentComponent }  from './about-me-component/about-me-component.component';
import { ProjectsComponent }    from './projects/projects.component';
import { TechnologiesComponent }  from './technologies/technologies.component';
import { EducationComponent }  from './education/education.component';
import { ContactComponent }  from './contact/contact.component';

const appRoutes: Routes = [
  { path: 'main', component: AboutMeComponentComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'technologies', component: TechnologiesComponent },
  { path: 'education', component: EducationComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class AppRoutingModule { }
