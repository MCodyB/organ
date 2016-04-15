const React = require('react');
const Note  = require("../util/note");
const KeyStore = require("../stores/key_store");

const Key = React.createClass({
  getInitialState: function () {
    return {keys: KeyStore.activeNotes()};
  },

  componentDidMount: function () {
    if (this.state.keys.indexOf(this.props.keyName) >= 0) {
      var freq = Tones[this.props.keyName];
      this.note = new Note(freq);
      this.note.start();
    }
  },

  componentWillUnmount: function () {
    this.note.stop();
  },

  updateNotes: function () {
    this.setState({keys: KeyStore.activeNotes()});
  },

  render: function () {
    console.log(this.props.keyName);
    return <div onChange={this.updateNotes}>{this.props.keyName}</div>;
  },
  
});

module.exports = Key;