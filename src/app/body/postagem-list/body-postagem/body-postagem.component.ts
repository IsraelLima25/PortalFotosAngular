import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portal-body-postagem',
  templateUrl: './body-postagem.component.html',
  styleUrls: ['./body-postagem.component.css']
})
export class BodyPostagemComponent implements OnInit {
  
  @Input() foto: string = '';

  constructor() { }

  ngOnInit() {
    
  }

}
