import { Component, OnInit } from '@angular/core';
import { Postagem } from 'src/modelo/Postagem';
import { PostagemService } from 'src/service/postagem-service';
import { UserService } from 'src/app/core/user/user.service';

@Component({
  selector: 'portal-body-page',
  templateUrl: './body-page.component.html',
  styleUrls: ['./body-page.component.css']
})
export class BodyPageComponent implements OnInit {

  postagens: Postagem [] = []
  userLogged: string = '';

  constructor(private postagemService: PostagemService,
              private userService: UserService) {
                this.userLogged = this.userService.getUserName();               
    }

  ngOnInit() {
      this.postagemService.listPostagemUsuarioLogado()
      .then(response=>this.postagens = response)
      .catch(err=>console.log(err))
  }

}
