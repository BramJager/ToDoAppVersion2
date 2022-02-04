import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Todo } from '../core/objects/todo';
import { TodoService } from '../core/todo.service';

@Component({
  selector: 'app-tododialog',
  templateUrl: './tododialog.component.html',
  styleUrls: ['./tododialog.component.scss']
})
export class TododialogComponent {

  constructor(
    public dialogRef: MatDialogRef<TododialogComponent>, private service: TodoService,
    @Inject(MAT_DIALOG_DATA) public data: Todo ) {}

    todo: Todo = new Todo;

    onNoClick(): void {
      this.dialogRef.close();
    }

    addTodo(): void {
      this.todo.title = (document.getElementById("title") as HTMLInputElement).value;
      this.todo.description = (document.getElementById("descr") as HTMLInputElement).value;
      console.log(this.todo.description + " " + this.todo.title + " " + this.todo.isDone);
      this.service.createTodo(this.todo).subscribe();
    }
}
