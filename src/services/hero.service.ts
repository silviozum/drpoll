import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poll } from '../app/poll';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) { }

    create( poll: poll) {
      return this.http.post('https://drpoll-efb65.firebaseio.com/poll.json', poll)
      .toPromise()
      .then(res =>{
        return res
      })
  };
  emptyPoll(){
    return Poll
  }
  getPoll(id: String){
    return this.http.get('https://drpoll-efb65.firebaseio.com/poll/'+ id +'.json')
  };

  vote(item, idx: Number, id: String ){
    return this.http.put('https://drpoll-efb65.firebaseio.com/poll/'+ id +'/options/' + idx + '.json', item)
    .toPromise()
     .then(res =>{
       return res
     })
  };


}
