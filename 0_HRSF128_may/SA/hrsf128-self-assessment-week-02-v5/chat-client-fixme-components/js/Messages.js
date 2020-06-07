var Messages = {

  _data: [],

  create: function(text, username, callback = ()=>{}) {
    var message = { text, username };
    Parse.post(message, (response) => {
      _.extend(message, response);
      Messages._data.unshift(message); // add to begining of array
      callback();
      // callback() => MessagesView.render
    });
  },

  fetch: function(callback = ()=>{}) {
    Parse.getAll((messages) => {
      Messages._data = messages;
      callback();
    });
  },

  each: function(callback = ()=>{}) {
    for (var i = 0; i < Messages._data.length; i++) {
      callback(Messages._data[i]);
    }
  }

};

// * [ ] Fix the chat client so that a new message is rendered to the chat log as soon as the client knows the server successfully stored the item, rather than waiting for the next timed update (10 seconds later).