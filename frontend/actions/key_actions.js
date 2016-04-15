const KeyConst = require("../constants/key_constants")

var KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({
      actionType: KeyConst.KEY_PRESSED,
      noteNum: key
    });
  },

  keyReleased: function (key) {
    AppDispatcher.dispatch({
      actionType: KeyConst.KEY_RELEASED,
      noteNum: key
    });
  },
  
};

module.exports = KeyActions;