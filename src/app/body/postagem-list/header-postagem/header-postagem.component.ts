import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portal-header-postagem',
  templateUrl: './header-postagem.component.html',
  styleUrls: ['./header-postagem.component.css']
})
export class HeaderPostagemComponent implements OnInit {

  @Input() usuarioName: string = ''
  constructor() { }

  ngOnInit() { 
  }

}
