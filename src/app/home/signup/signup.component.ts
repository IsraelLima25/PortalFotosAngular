import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/shared/validators/lower-case.validator';
import { UserNotTakenValidatorService } from './user-not-taken.validator';
import { Usuario } from 'src/modelo/Usuario';

@Component({ 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup
  constructor(private formBuilder: FormBuilder,
              private userNotTakenValidatorService: UserNotTakenValidatorService) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      email: [
        '', 
        [
          Validators.required, 
          Validators.email
        ]
      ],
      fullName: [
        '',
        [
          Validators.required, 
          Validators.minLength(2), 
          Validators.maxLength(40)
        ]
      ],
      userName: [
        '',
        [
          Validators.required,          
          Validators.minLength(2),
          Validators.maxLength(30) 
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(14)
        ]
      ]
    })
  }

  signup(){
    //Captura todos os campos do formulario e devolve um obj js e já converte para o tipo definido.
    // A conversão é feita havendo paridade entre as propriedades do obj e os campos do formulario.
    const newUser = this.signupForm.getRawValue() as Usuario;

    //Desenvolver serviçe para gravar um usuario via api e em seguida redirecionar para a página de login

  }

}
