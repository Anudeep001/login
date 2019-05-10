// import { AuthService } from './../auth.service';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { userService } from '../userservice'
import { RoutesService } from '../RoutesService';

@Component({
    selector: 'userdetails',
    templateUrl: './userdetails.component.html',
    styleUrls: ['./userdetails.component.css', 'styles.css']
})
export class Employee  implements OnInit{
userId:any=[];
    userdata;
    tokenuserId:any=[];
    isEmpty: boolean=true;
 
 constructor(private transactions: userService, private routesService: RoutesService) {
     
//     this.transactions.getById((data)=>{
// console.log(data)
//         console.log(data.result1.rows,"user transactions table")
//         console.log(typeof(data.result1.rows))
//         if(data.result1.rows!=undefined){
//             this.userdata=data.result1.rows;
           
//         }
            
      
//          })
//          this.isEmpty=!this.isEmpty;
//  }



     
 ngOnInit(){
     
 }

}
