import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';

@Component({
  selector: 'vitro-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm !: FormGroup
    constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
    })
  }

  login() {
    const headers = new HttpHeaders()
      .append(
        'Content-Type',
        'application/json'
      );

    const body = JSON.stringify(this.loginForm.value.username, this.loginForm.value.password)

    const params = new HttpParams()
      .append('username', this.loginForm.value.username)
      .append('password', this.loginForm.value.password);

    this.http.post<any>("http://localhost:8080/vivo/api/login", body, {headers, params})
      .subscribe({
        next: () => {
          console.log('Successful login')
          this.router.navigate([""])
        },
        error: error => {
          console.error('There was an error!', error);
        }
      })
  }
}
