import { Component } from '@angular/core';
import { Poll } from '../poll';
import { HeroService } from '../../services/hero.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class Main implements OnInit{
  dataPoll  : Poll[];
  title = 'drpoll';
  linkPoll : string = '';
  linkResults : string = '';
  constructor( private api: HeroService) { }

  ngOnInit(){
    this.dataPoll  = this.api.emptyPoll();
  }

  submitPoll(){
    console.log(this.dataPoll )
    // this.api.create(this.dataPoll)
    // .then(data =>{
    //   let id: String = data.name
    //   this.linkPoll = window.location.origin + '/poll/' + id
    //   this.linkResults = window.location.origin + '/poll/' + id + '/result'
    // })
  }
}
