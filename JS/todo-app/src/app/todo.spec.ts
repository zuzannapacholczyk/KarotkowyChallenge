import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in constr', () => {
    let todo = new Todo({
      title: 'do programming',
      complete: false
    });
    expect(todo.title).toEqual('do programming');
    expect(todo.complete).toBeFalsy;
  });
});
