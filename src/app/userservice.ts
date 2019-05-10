import { HttpClient } from '@angular/common/http';

import { environment } from '@environments/environment';
import { Injectable } from '@angular/core';

//import { routerNgProbeToken } from '@angular/router/src/router_module';

@Injectable()
export class userService{
    
  constructor(private http: HttpClient) { }


  getById(id: number) {
    return this.http.get(`${environment.apiUrl}/users/${id}`);
}
}
