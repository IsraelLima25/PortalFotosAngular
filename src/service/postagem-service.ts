import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Postagem } from 'src/modelo/Postagem';
import { Observable } from 'rxjs';
import { Usuario } from 'src/modelo/Usuario';
import { UserService } from 'src/app/core/user/user.service';

const API = 'http://localhost:8080';

@Injectable({ providedIn: 'root' })
export class PostagemService {

    constructor(private http: HttpClient,
                private userService: UserService) {}

    listFromPostagem():Promise<Postagem[]> {
        return this.http
            .get<Postagem[]>(API + '/postagem').toPromise();       
    }

    listFromUserPaginated(userName: string, page: number) {
        const params = new HttpParams()
            .append('page', page.toString());

        return this.http
            .get<Postagem[]>(API + '/' + userName + '/photos', { params });       
    }
    
    listPostagemUsuarioLogado():Promise<Postagem[]>{
        return this.http
            .get<Postagem[]>(API + '/postagem' + '/usuario/' + this.userService.getUserName())
            .toPromise();
    }    
    
}

