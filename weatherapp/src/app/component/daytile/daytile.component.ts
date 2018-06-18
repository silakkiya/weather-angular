import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daytile',
  templateUrl: './daytile.component.html',
  styleUrls: ['./daytile.component.css']
})
export class DaytileComponent implements OnInit {
@Input() 
  constructor() { }

  ngOnInit() {
  }

}
