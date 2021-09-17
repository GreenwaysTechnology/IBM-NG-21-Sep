import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ColdstreamService } from './coldstream.service';

@Component({
  selector: 'app-cstreamsub3',
  templateUrl: './cstreamsub3.component.html',
  styles: [
  ]
})
export class Cstreamsub3Component implements OnInit {

  values: number[] = [];
  subscription!: Subscription;
  constructor(public coldService: ColdstreamService) { }

  ngOnInit(): void {
    this.subscription = this.coldService.emitValue().subscribe(data => {
      console.log(data)
      this.values.push(data);
    })

    //unsubscription manually
    setTimeout(()=>{
      this.subscription.unsubscribe()
    },15000)



  }
  ngOnDestory() {
    //stop/cancel the subscription
    this.subscription.unsubscribe();
  }

}
