const AppDispatcher = require("../dispatcher/dispatcher");
const Store = require("flux/utils").Store;
const Tones = require("../constants/tones");
const KeyConst = require("../constants/key_constants")

var _keys = [];

var setKeys = function (noteName) {
  if (Tones[noteName]) {
    _keys.push(noteName);
    return true;
  } else {
    return false;
  }
};

var removeKey = function (noteName) {
  var i = _keys.indexOf(noteName);
  if (i >= 0) {
    _keys.splice(i,1);
    return true;
  } else {
    return false;
  }
};

// const KeyStore = $.extend(new Store(AppDispatcher), {
  const KeyStore = new Store(AppDispatcher);

  KeyStore.activeNotes = function () {
  return _keys.slice();
}

KeyStore.__onDispatch = function (key) {

  switch(key.actionType) {
    case KeyConst.KEY_PRESSED:
      if (setKeys(key.noteName)) KeyStore.__emitChange();
      break;

    case KeyConst.KEY_RELEASED:
      if (removeKey(key.noteName)) KeyStore.__emitChange();
      break;


    default:
      // no op
  }
  
}
// })

// AppDispatcher.register(function(key) {
//
//   switch(key.actionType) {
//     case KeyConst.KEY_PRESSED:
//       if (setKeys(key.noteName)) KeyStore.__emitChange();
//       break;
//
//     case KeyConst.KEY_RELEASED:
//       if (removeKey(key.noteName)) KeyStore.__emitChange();
//       break;
//
//
//     default:
//       // no op
//   }
// });

module.exports = KeyStore;

