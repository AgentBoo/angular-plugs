import { Component, OnInit, ViewChild } from '@angular/core';
import { SocketsService, Socket } from '../../services/sockets.service';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-plug-reference',
  templateUrl: './plug-reference.component.html',
  styleUrls: ['./plug-reference.component.scss']
})
export class PlugReferenceComponent implements OnInit {
	openReferenceTable: boolean = false
  displayedColumns: string[] = ['country', 'voltage', 'frequency', 'plug types'];
  socketsByCountry: MatTableDataSource<Socket>; 

  @ViewChild(MatPaginator) paginator: MatPaginator

  constructor(private sockets: SocketsService) { 
  	this.socketsByCountry = new MatTableDataSource(this.sockets.socketsByCountry)
  }

  ngOnInit() {
  	this.socketsByCountry.paginator = this.paginator
  }

}
