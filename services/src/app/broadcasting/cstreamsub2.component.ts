import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ColdstreamService } from './coldstream.service';

@Component({
  selector: 'app-cstreamsub2',
  templateUrl: './cstreamsub2.component.html',
  styles: [
  ]
})
export class Cstreamsub2Component implements OnInit {

  values: number[] = [];
  subscription!: Subscription;

  constructor(public coldService: ColdstreamService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.subscription = this.coldService.emitValue().subscribe(data => {
        console.log(data)
        this.values.push(data);
      })
    }, 10000);
    setTimeout(() => {
      this.subscription.unsubscribe()
    }, 15000)

  }
  ngOnDestory() {
    console.log('component has been destroyed')
    this.subscription.unsubscribe()

  }

}
