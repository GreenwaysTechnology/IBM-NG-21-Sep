import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HotstreamService } from './hotstream.service';

@Component({
  selector: 'app-hotstreamsub3',
  templateUrl: './hotstreamsub3.component.html',
  styles: [
  ]
})
export class Hotstreamsub3Component implements OnInit {
  subscription!: Subscription;
  values: number[] = [];

  constructor(private hotStream: HotstreamService) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.subscription = this.hotStream.emitValue().subscribe(data => {
        console.log(data)
        this.values.push(data);
      })
    }, 20000);
  }
  ngOnDestory() {
    console.log('component has been destroyed')
    this.subscription.unsubscribe()
  }

}
