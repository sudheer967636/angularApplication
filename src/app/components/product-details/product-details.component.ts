import { Router } from '@angular/router';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogTitle } from '@angular/material/dialog';
import IData from 'src/app/interface/model';




@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  public productsDetails:IData={
    id: 0,
    title: '',
    price: 0,
    description: '',
    category: ''
  };
title: any;
  constructor(@Inject(MAT_DIALOG_DATA) private data: any,
              private router:Router
  ){}
  ngOnInit(){

    this.productsDetails={...this.data}
  }
  goToCart(){
    if(localStorage.getItem("token")){
      return this.router.navigate(["/cart"])
    }else{
      return  this.router.navigate(["/login"]);
    }
  }

}
