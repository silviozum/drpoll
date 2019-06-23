import { Component } from '@angular/core';
import { Poll } from '../poll';

@Component({
  selector: 'app-choice-poll',
  templateUrl: './choice-poll.component.html',
  styleUrls: ['./choice-poll.component.css']
})
export class ChoicePollComponent {
  dataPoll : Poll;
  message : String = 'Thank You';
  gif : String = 'Set url gif';
  addOption(){
    let option = {
      label:'edit option',
      hidden:false,
      value: 0
    }
    this.dataPoll.options.push(option)
  };
  removeOption(index){
    this.dataPoll.options.splice(index, 1)
  };
  setMessage(message){
    this.dataPoll.message = message
  }
  setGifUrl(url){
    this.dataPoll.gif = url
  }

}
