import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RoutesService{
    constructor(private router:Router){

    }

    routeToLogin(){
       this.router.navigate(['/login']);
    }



    routeToHome(){
        this.router.navigate(['/subbody']);
    }

    routeToTasks()
    {
        this.router.navigate(['/subbody/transactions'])
    }

}