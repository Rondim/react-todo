var expect = require('expect');
var df = require('deep-freeze-strict');
var reducers =  require('reducers');

describe('Reducer', () => {
  describe('searchTextReducer', () => {
    it('should set search text', () => {
      var action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Dog'
      };
      var res = reducers.searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);
    });
  });

  describe('showCompletedReducer', () => {
    it('should flip status', () => {
      var action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(true), df(action));
      expect(res).toEqual(false);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        todo: {
          id: 'abc123',
          text: 'Something Todo',
          completed: false,
          createdAt: 92323423
        }
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toBe(1);
      expect(res[0]).toEqual(action.todo);
    });
    it('should update todo', () => {
      var action = {
        type: 'UPDATE_TODO',
        id: '33',
        updates: {
          completed: true,
          completedAt: 23244
        }
      };
      var todos = [{
        id: '33',
        text: 'Walk the dog',
        completed: false,
        createdAt: 100,
        completedAt: undefined
      }];
      var res = reducers.todosReducer(df(todos), df(action));

      expect(res[0].completed).toBe(true);
      expect(res[0].completedAt).toBe(23244);
      expect(res[0].text).toBe(todos[0].text);
    });
    it('should add existing todos', () => {
      var todos = [{
        id: 111,
        text: 'Anything',
        completed: false,
        completedAt: undefined,
        createdAt: 30000
      }];
      var action = {
        type: 'LOGOUT'
      };

      var res = reducers.todosReducer(df(todos), df(action));

      expect(res).toEqual([]);
    });
  });
  it('should wipe todos on LOGOUT', () => {
    var todos = [{
      id: 111,
      text: 'Anything',
      completed: false,
      completedAt: undefined,
      createdAt: 30000
    }];
    var action = {
      type: 'ADD_TODOS',
      todos
    };

    var res = reducers.todosReducer(df([]), df(action));

    expect(res.length).toEqual(1);
    expect(res[0]).toEqual(todos[0]);
  });
  describe('authReducer', () => {
    it('should login user', () => {
      var action = {
        type: 'LOGIN',

      };
      var auth = {};
      var res = reducers.authReducer(df(auth), df(action));
      expect(res).toEqual({uid: action.uid});
    });
    it('should logout user', () => {
      var action = {
        type: 'LOGOUT'
      };
      var auth = {
        uid: 'asdkjfldfsdf'
      };
      var res = reducers.authReducer(df(auth), df(action));
      expect(res).toEqual({});
    });
  });
});
