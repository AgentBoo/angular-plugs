import { Component, OnInit } from '@angular/core';
import { SocketsService } from '../../services/sockets.service'

@Component({
  selector: 'app-plug-reference',
  templateUrl: './plug-reference.component.html',
  styleUrls: ['./plug-reference.component.scss']
})
export class PlugReferenceComponent implements OnInit {
  socketsByCountry = this.sockets.socketsByCountry

  constructor(private sockets: SocketsService) { }

  ngOnInit() {
  }

}
