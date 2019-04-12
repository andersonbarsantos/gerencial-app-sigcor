import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Observable} from "rxjs";

import { User } from 'src/app/shared/models/user.model';
import { ApiResponse } from 'src/app/shared/models/api.response.model';

@Injectable()
export class UserControllers {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8080/users/';

  login(loginPayload) : Observable<ApiResponse> {
    return this.http.post<ApiResponse>('http://localhost:8080/' + 'token/generate-token', loginPayload);
  }

  getUser(){
    // return this.http.get<ApiResponse>(this.baseUrl);

    const users: User[] = [
      { id: 1
      , username: 'barreto.develop@gmail.com'
      , password: '123456'
      , nome: 'Anderson Barreto'
      , sobreNome: 'User'
      , cargo :'Administrador' }
  ];

  return users ; 

  }

  getUsers() : Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }

  getUserById(id: number): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl + id);
  }

  createUser(user: User): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(this.baseUrl, user);
  }

  updateUser(user: User): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(this.baseUrl + user.id, user);
  }

  deleteUser(id: number): Observable<ApiResponse> {
    return this.http.delete<ApiResponse>(this.baseUrl + id);
  }
}
