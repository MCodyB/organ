const React = require('react');
const Note  = require("./util/note");
const Tones = require("../constants/tones");

const Key = React.createClass({
  componentDidMount: function () {
    var freq = Tones[this.props.noteName];
    this.note = new Note(freq);
  }
});
