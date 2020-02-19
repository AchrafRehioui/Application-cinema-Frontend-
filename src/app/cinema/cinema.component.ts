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
  public currentCity;
  public currentCinema;
  public moviestheaters;

  constructor(public cinemaService:CinemaService) { }

  ngOnInit(){
    this.cinemaService.getCities()
      .subscribe(data=>{
        this.cities=data;
      },err=>{
          console.log(err);
      })
  }
   onGetCinemas(v){
    this.currentCity=v;
    this.cinemaService.getCinemas(v)
    .subscribe(data=>{
        this.cinemas=data;
      },err=>{
          console.log(err);
      })
  }
  onGetMoviestheater(c){
    this.currentCinema=c;
    this.cinemaService.getMoviestheater(c)
    .subscribe(data=>{
      this.moviestheaters=data;
      this.moviestheaters._embedded.moviestheaters.forEach((moviestheater) => {
        this.cinemaService.getProjections(moviestheater)
        .subscribe(data=>{
          moviestheater.projections=data;
        },err=>{
            console.log(err);
        })
      });
    },err=>{
        console.log(err);
    })
  }
  
}
