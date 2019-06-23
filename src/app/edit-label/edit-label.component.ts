import { Component, Input } from '@angular/core';
import { Poll } from '../poll';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.css']
})
export class EditLabelComponent{
      dataPoll : Poll;
     @Input() title: string;
     edit: boolean = true;
     @Input() where: string;
     newTitle: string;

     editInput(){
       this.edit = false;
     };

     addTitle(){
       if(this.newTitle){
         if(this.where === 'title'){
           this.dataPoll.title = this.newTitle
        }
        else{
            this.dataPoll.options[this.where].label = this.newTitle
        }
        this.edit = true
      }
    };
}
