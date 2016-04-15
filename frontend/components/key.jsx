const React = require('react');
const Note  = require("../util/note");
const KeyStore = require("../stores/key_store");

const Key = React.createClass({
  getInitialState: function () {
    return {keys: KeyStore.activeNotes()};
  },

  componentDidMount: function () {
    this.note = new Note(this.prop.key);
    if (this.state.keys.indexOf(this.prop.key) >= 0) {
      var freq = Tones[this.prop.key];
      this.note.start(freq);
    }
  },

  componentWillUnmount: function () {
    this.note.stop();
  },

  updateNotes: function () {
    this.setState({keys: KeyStore.activeNotes()});
  },

  render: function () {
    return <div onChange={this.updateNotes}>{this.state.keyName}</div>;
  },
  
});

module.exports = Key;