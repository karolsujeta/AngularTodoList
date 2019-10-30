import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista zadań do zrobienia przed premierą klipu:';
  todos = [
    {
      label: 'Cięcie materiału',
      priority: 1
    },

    {
      label: 'Znalezienie muzyki',
      priority: 2
    },

    {
      label: 'Intro',
      priority: 3
    },

    {
      label: 'Trailer',
      priority: 4
    },
  ];

  addTodo(newTodoLabel) {
    var newTodo = {
      label: newTodoLabel,
      priority: 1,
    }
    this.todos.push(newTodo);
  }

  deleteTodo(todo){
    this.todos=this.todos.filter(t=>t.label!==todo.label);
  }
}
