import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../types/user.type';
import { ArraystreamService } from './arraystream.service';

@Component({
  selector: 'app-arrayreactive',
  templateUrl: './arrayreactive.component.html',
  styles: [
  ]
})
export class ArrayreactiveComponent implements OnInit {

  // stream$!: User[];
//  users!: Observable<User[]>;
  constructor(public arrayService: ArraystreamService) { }

  ngOnInit(): void {
    // this.arrayService.findAll().subscribe(data => {
    //   console.log(data);
    //   this.stream$ = data;
    // });
   // this.users = this.arrayService.findAll();
  }

}
