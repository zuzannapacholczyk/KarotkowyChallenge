/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Todo} from '../todo';
import { TodoListHeaderComponent } from './todo-list-header.component';

describe('TodoListHeaderComponent', () => {
  let component: TodoListHeaderComponent;
  let fixture: ComponentFixture<TodoListHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoListHeaderComponent ],
      imports: [
        FormsModule
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TodoListHeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Todos');
  }));

  it(`should have as newTodo todo`, async(() => {
    const fixture = TestBed.createComponent(TodoListHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.newTodo instanceof Todo).toBeTruthy;
  }));
});
