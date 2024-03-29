import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducers';
import { Todo } from '../models/todo.model';

@Component({ selector: 'app-todos-list', templateUrl: './todos-list.component.html' })
export class TodosListComponent implements OnInit {
  todos: Todo[] = [];
  filtro: string;
  constructor(private store: Store<AppState>) { }
  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtro = state.filtro;
    });
  }
}
