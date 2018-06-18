import { Component, OnInit, Input } from '@angular/core';
import { IDayTile } from './../../models/daytile';
@Component({
  selector: 'app-daytile',
  templateUrl: './daytile.component.html',
  styleUrls: ['./daytile.component.css']
})
export class DaytileComponent implements OnInit {
@Input() dayTileInfo: IDayTile;

  constructor() { }

  ngOnInit() {
  }
  onTileClick() {
    this.weatherService.updateDayInfoFor(this.dayTileInfo.dayNum);
  }


}
