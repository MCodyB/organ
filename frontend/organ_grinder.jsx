var ReactDOM = require("react-dom");
var React    = require("react");
var Key      = require("./components/key");
require("./util/key_listener");
testNote = require("./util/note");


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<Key keyName={"AsrpOneBbone"} />, this.getElementById("content"))
});
