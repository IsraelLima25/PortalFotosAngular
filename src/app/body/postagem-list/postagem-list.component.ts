import { Component, OnInit } from '@angular/core';

import { PostagemService } from 'src/service/postagem-service';
import {Postagem} from '../../../modelo/Postagem';

@Component({
  selector: 'portal-postagem-list',
  templateUrl: './postagem-list.component.html',
  styleUrls: ['./postagem-list.component.css']
})
export class PostagemListComponent implements OnInit {

  postagens: Postagem[]
  list:any[]

  constructor(private postagemService:PostagemService) { }

  ngOnInit() {
      this.postagemService.listFromPostagem()      
      .then(response=>this.postagens = response)
  }
}
