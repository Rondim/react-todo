var React = require("react");
var ReactDOM = require("react-dom");
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require("react-router");

var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();


store.subscribe(() => {
  console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('learn redux'));
store.dispatch(actions.setSearchText('redux'));
store.dispatch(actions.toggleShowCompleted());

$(document).foundation();
// Custom styles
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById("app")
);
