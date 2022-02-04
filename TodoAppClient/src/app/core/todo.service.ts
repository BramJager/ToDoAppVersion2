import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from './objects/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  
  getAll() : Observable<Todo[]>{

    return this.http.get<Todo[]>("/api/todos");
  }

  createTodo(todo: Todo): Observable<Todo>{
    console.log("service called");
    return this.http.post<Todo>("/api/todo/create", todo);
  }

  checkTodo(id: number): Observable<number>{
    console.log("service called");
    let url = "/api/todo/" + id + "/check";
    return this.http.post<number>(url, id);
  }

  deleteTodo(id: number): Observable<number>{
    console.log("service called");
    let url = "/api/todo/" + id + "/delete";
    return this.http.post<number>(url, id);
  }
}