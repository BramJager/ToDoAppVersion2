import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Todo } from '../core/objects/todo';
import { TodoService } from '../core/todo.service';
import { TododialogComponent } from '../tododialog/tododialog.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private service: TodoService, public dialog: MatDialog) { }

  todoList: Todo[] = [];
  todo: Todo = new Todo();

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {this.todoList = data});
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(TododialogComponent, {
      width: '500px',
      data: this.todo
    })
  }

  checkDone(id:number): void{
    this.service.checkTodo(id).subscribe();
  }

  deleteTodo(id:number): void{
    this.service.deleteTodo(id).subscribe();
  }

  refresh() : void{
    window.location.reload();
  }

  addTodo(): void {
    this.todo.title = (document.getElementById("title") as HTMLInputElement).value;
    this.todo.description = (document.getElementById("descr") as HTMLInputElement).value;
    console.log(this.todo.description + " " + this.todo.title + " " + this.todo.isDone);
    this.service.createTodo(this.todo).subscribe();
  }
}
