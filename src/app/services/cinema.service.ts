import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  

  public host:string="http://localhost:8080"

  constructor(private http:HttpClient) {}

  public getCities(){

  return this.http.get(this.host+"/cities");

  }
  getCinemas(v){

  return this.http.get(v._links.Cinemas.href);
  }
  getMoviestheater(c){

  return this.http.get(c._links.Moviestheaters.href);

  }
  getProjections(moviestheater: any){

    let url= moviestheater._links.projections.href.replace("{?projection}","");
    return this.http.get(url+"?projection=p1");

  }

}
