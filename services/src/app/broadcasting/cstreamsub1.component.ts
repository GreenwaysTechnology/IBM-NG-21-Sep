import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColdstreamService } from './coldstream.service';

@Component({
  selector: 'app-cstreamsub1',
  templateUrl: './cstreamsub1.component.html',
  styles: [
  ]
})
export class Cstreamsub1Component implements OnInit {

  values: number[] = [];
  subscription!: Subscription;

  constructor(public coldService: ColdstreamService) { }

  ngOnInit(): void {
    this.subscription = this.coldService.emitValue().subscribe(data => {
      // console.log(data)
      this.values.push(data);
    })
    setTimeout(() => {
      this.subscription.unsubscribe();
      console.log('unsubscribe')
    }, 5000)
  }
  ngOnDestory() {
    console.log('component has been destroyed')
    this.subscription.unsubscribe()
  }
}
