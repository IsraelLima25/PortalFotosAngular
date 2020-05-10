import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, RequiredValidator, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Router } from '@angular/router';
import { PlatformDetectorService } from 'src/app/core/platform-detector/platform-detector.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

  constructor(private formBuilder: FormBuilder, 
              private authService: AuthService,
              private router: Router,
              private platformDetectorService: PlatformDetectorService
              ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login(){
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    this.authService
    .authenticate(userName,password)
    .subscribe(
      (res) => 
      //this.router.navigate([['usuario'], userName,['postagens']])
      console.log('Autenticado'),                
      err => {
        console.log(err)
        this.loginForm.reset()
        this.platformDetectorService.isPlatformBrowser()
            this.userNameInput.nativeElement.focus()
            alert('UserName and Password invalid.')
      }
    )
  }

}
