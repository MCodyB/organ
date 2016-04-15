const React = require('react');
const Note  = require("../util/note");
const KeyStore = require("../stores/key_store");

const Key = React.createClass({
  componentDidMount: function () {

    this.note = new Note(KeyStore.freq());
  }
});
