import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero.service';
import { ActivatedRoute } from "@angular/router";
import { Poll } from '../poll';
@Component({
  selector: 'app-content-poll',
  templateUrl: './content-poll.component.html',
  styleUrls: ['./content-poll.component.css']
})
export class ContentPollComponent implements OnInit {
  constructor(public api: HeroService, private route: ActivatedRoute) { }
  dataPoll : Poll;
  id: string = this.route.snapshot.url[1].path;
  urlParam : boolean = true;
  ngOnInit() {
    let self = this;
      self.bigPoll(self.id);
      setInterval(() => {
      self.bigPoll(self.id);
    }, 8000);


    if(this.route.snapshot.url.length > 2){
      this.urlParam = false
    }
  }

  bigPoll(id){
    this.api.getPoll(id)
      .subscribe(data => {
        this.dataPoll = data
    });
  }


  submitItem(item , idx){
    item.value ++
    let total :Number = 0;
    this.dataPoll.options.map(function(o){
      total += o.value
    })

    this.api.vote(item , idx, this.id).then(res =>{console.log(res)})
    setTimeout(() => {
    this.urlParam = false
  }, 700);

  }

}
