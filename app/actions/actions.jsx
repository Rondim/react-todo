import firebase, {firebaseRef} from 'app/firebase';
import moment from 'moment';

export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
};
export var addTodo = (todo) => {
  return {
    type: 'ADD_TODO',
    todo
  };
};

export var startAddTodo = (todoText) => {
  return (dispatch, getState) => {
    var todo = {
      text: todoText,
      completed: false,
      createdAt: moment().unix(),
      completedAt: null
    };
    console.log(Date.now());
    var todoRef = firebaseRef.child('todos').push(todo);
    return todoRef.then(() => {
      console.log(Date.now());
      dispatch(addTodo({
        ...todo,
        id: todoRef.key
      }));
    });
  };
};
export var toggleShowCompleted = () => {
  return {
    type: 'TOGGLE_SHOW_COMPLETED'
  };
};
export var addTodos = (todos) => {
  return {
    type: 'ADD_TODOS',
    todos
  };
};
export var startAddTodos = () => {
  return (dispatch, getState) => {
    return firebaseRef.child('todos').once('value').then((snapshot) => {
      var firebaseTodos = snapshot.val() || {};
      var todos = Object.keys(firebaseTodos).map(id => {
        return {
          id,
          ...firebaseTodos[id]
        };
      });
      dispatch(addTodos(todos));
    }, (e) => console.log(e));
  };
};
export var updateTodo = (id, updates) => {
  return {
    type: 'UPDATE_TODO',
    id,
    updates
  };
};
export var startToggleTodo = (id, completed) => {
  return (dispatch, getState) => {
    var todoRef = firebaseRef.child(`todos/${id}`);
    var updates = {
      completed,
      completedAt: completed ? moment().unix() : null
    };
    return todoRef.update(updates).then(() => {
      dispatch(updateTodo(id, updates));
    });
  };
};
