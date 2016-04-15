const KeyConst = require("../constants/key_constants")

var KeyActions = {
  keyPressed: function (key) {
    AppDispatcher.dispatch({
      actionType: KeyConst.KEY_PRESSED,
      noteName: key
    });
  },

  keyReleased: function (key) {
    AppDispatcher.dispatch({
      actionType: KeyConst.KEY_RELEASED,
      noteName: key
    });
  }
};

module.exports = KeyActions;