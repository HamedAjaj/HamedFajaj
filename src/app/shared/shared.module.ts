import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { ProjectComponent } from './project/project.component';
import { FooterComponent } from './footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
  declarations: [
    NavbarComponent,
    ProfileComponent,
    ProjectComponent,
    FooterComponent,
    ExperienceComponent,
    ContactUsComponent
  ],
  
  exports:[
    NavbarComponent,
    ProfileComponent,
    ProjectComponent,
    FooterComponent,
    ExperienceComponent,
    ContactUsComponent
  ],

  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
