import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'portal-footer-postagem',
  templateUrl: './footer-postagem.component.html',
  styleUrls: ['./footer-postagem.component.css']
})
export class FooterPostagemComponent implements OnInit {

  @Input() biografia: string = '';
  @Input() titulo: string = '';
  
  constructor() { }

  ngOnInit() {
  }

}
