var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

import {Provider} from 'react-redux';
import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: 'Do Something',
        completed: false,
        completedAt: undefined,
        createAt: 500
      }, {
        id: 2,
        text: 'Check mail',
        completed: false,
        completedAt: undefined,
        createAt: 500
      }
    ];
    var store = configure({
      todos
    });
    var provider = TestUtils.renderIntoDocument(<Provider store={store}>
      <ConnectedTodoList/>
    </Provider>);
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];

    var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);

    expect(todosComponents.length).toBe(todos.length);

  });

  it('should render empty message if no todos', () => {
    var todos = [];
    var store = configure({todos});
    var provider = TestUtils.renderIntoDocument(<Provider store={store}>
      <ConnectedTodoList/>
    </Provider>);
    var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
    var $el = $(ReactDOM.findDOMNode(todoList));

    expect($el.find('.container__message').length).toBe(1);
  });
});
