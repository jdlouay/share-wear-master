import { Injectable } from '@angular/core';
import { Article } from './model/article.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  article!:Article[];

  constructor() {
    this.article=[
      {nom:"pantalon",etat:"bon",prix:10,desc:'patalon noir'},
    ]
   }

  }

 
    
  






  
  




