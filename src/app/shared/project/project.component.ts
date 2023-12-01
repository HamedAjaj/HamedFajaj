import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  Projects!:{image:string, title:string , githubUrl:string , LiveDemoUrl:string}[];

  constructor(){
    this.Projects = [
      {image:'./assets/images/project/dash1.webp', title:'FreeBook DashBoard', githubUrl:'https://github.com/HamedAjaj/FreeBooks' , LiveDemoUrl:''},
      {image:'./assets/images/project/book02.png', title:'BookStore', githubUrl:'https://github.com/HamedAjaj/BookStore_WebAPI' , LiveDemoUrl:''},
      {image:'./assets/images/project/ecom.jfif', title:'E-Commerece App', githubUrl:'https://github.com/HamedAjaj/E-Commerce-App/tree/master' , LiveDemoUrl:''},
      {image:'./assets/images/project/flower.jfif', title:'Flower Classification', githubUrl:'https://github.com/HamedAjaj/Flower_Classification' , LiveDemoUrl:''},

    ]
  }

}
