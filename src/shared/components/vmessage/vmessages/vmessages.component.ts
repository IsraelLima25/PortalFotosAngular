import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portal-vmessages',
  templateUrl: './vmessages.component.html',
  styleUrls: ['./vmessages.component.css']
})
export class VmessagesComponent implements OnInit {

  @Input() text = '';

  constructor() { }

  ngOnInit() {
  }

}
