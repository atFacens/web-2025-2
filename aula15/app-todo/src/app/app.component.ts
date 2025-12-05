import { NgClass } from '@angular/common';
import { Component} from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  todoList: TodoItem[] = [];
  itemText: string='';

  addItem():void {
    const newItem: TodoItem = {
      id: Date.now(),
      task: this.itemText,
      completed:false
    };
    this.todoList.push(newItem);
    this.itemText = '';
    // console.log(this.todoList);
  }

  removeItem(id:number):void {
    this.todoList = this.todoList.filter(item=>item.id != id);
  }

  changeCompleted(index:number):void {
    this.todoList[index].completed = !this.todoList[index].completed;
    // console.log(this.todoList);
  }

}
