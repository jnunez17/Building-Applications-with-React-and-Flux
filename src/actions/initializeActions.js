"use strict";

var ActionTypes = require('../constants/actionTypes');
var AuthorApi = require('../api/authorApi');
var Dispatcher = require('../dispatcher/appDispatcher');

var InitializeActions = {
  initApp: function() {
    Dispatcher.dispatch({
      actionType: ActionTypes.INITIALIZE,
      initialData: {
        authors: AuthorApi.getAllAuthors()
      }
    });
  }
};

module.exports = InitializeActions;
