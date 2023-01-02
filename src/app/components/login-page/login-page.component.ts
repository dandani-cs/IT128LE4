import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { TokenStorageService } from 'src/app/token-storage.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  }

  constructor(
    private authService: AuthServiceService, 
    private tokenStorage: TokenStorageService,
    private http: HttpClient) { }

  ngOnInit(): void {
    
  }

  onSubmit() {
    const {username, password} = this.form;

    this.http.post("https://localhost:7161/api/Login/login", { username, password }).subscribe(data => {
      console.log(data);
    })
  }

}
