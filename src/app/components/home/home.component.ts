import { SharedServiceService } from './../../services/shared-service.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import IData from 'src/app/interface/model';
import { ProductDetailsComponent } from '../product-details/product-details.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public Data:IData[]=[];
  constructor(private sharedServiceService:SharedServiceService,
              private dialog:MatDialog
  ){}
  ngOnInit(){
    this.sharedServiceService.getAllProducts().subscribe((data)=>{
      this.Data=data;

    });
  }
  showDetails(eData:IData){
    console.log(eData);
    this.dialog.open(ProductDetailsComponent,{
     width:"400px",
     height:"550px",
     disableClose:true,
     enterAnimationDuration:"500ms",
     data:{...eData}
    });

  }

}
