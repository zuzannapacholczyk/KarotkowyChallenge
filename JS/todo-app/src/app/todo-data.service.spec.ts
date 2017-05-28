/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import {Todo} from './todo';
describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  it('should return empty todos list', inject([TodoDataService], (service: TodoDataService) => {
    expect(service.getAllTodos()).toEqual([]);
  }));

  it('should return list with one todo', inject([TodoDataService], (service: TodoDataService) => {
    let todo = new Todo({title: 'programming', complete: false});
    service.addTodo(todo);
    expect(service.getAllTodos()).toEqual([todo]);
  }));
});
