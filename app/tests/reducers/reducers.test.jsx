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
});
