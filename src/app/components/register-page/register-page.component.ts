import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
    firstname: null,
    lastname: null
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    const {
      username, password, firstname, lastname
    } = this.form;

    // this.http.post<string>("https://localhost:7161/api/Login/register" ).subscribe(data => {
    //   console.log(data);
    // })
  }

}
