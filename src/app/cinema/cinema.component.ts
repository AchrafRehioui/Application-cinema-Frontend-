import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CinemaService } from '../services/cinema.service';

@Component({
  selector: 'app-cinema',
  templateUrl: './cinema.component.html',
  styleUrls: ['./cinema.component.css']
})
export class CinemaComponent implements OnInit {

  public cities; 
  public cinemas;

  constructor(private cinemaService:CinemaService) { }

  ngOnInit(){
    this.cinemaService.getCities()
      .subscribe(data=>{
        this.cities=data;
      },err=>{
          console.log(err);
      })
  }
   onGetCinemas(v){
    this.cinemaService.getCinemas(v)
    .subscribe(data=>{
        this.cinemas=data;
      },err=>{
          console.log(err);
      })
  }

}
