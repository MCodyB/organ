const AppDispatcher = require("../dispatcher/dispatcher.js");
const Store = require("flux/utils").Store;
const Tones = require("../constants/tones");
const KeyConst = require("../constants/key_constants")


var _mapping = {
  37:"Czero", 38: "CsrpZeroDbzero", 39:"Dzero", 40: "DsrpZeroEbzero", 45:"Ezero",
  46:"Fzero", 48: "FsrpZeroGbzero", 49:"Gzero", 50: "GsrpZeroAbzero", 51:"Azero",
  52: "AsrpZeroBbzero", 53:"Bzero", 54:"Cone", 55: "CsrpOneDbone", 56:"Done",
  57: "DsrpOneEbone", 65:"Eone", 66:"Fone", 67: "FsrpOneGbone", 68:"Gone",
  69: "GsrpOneAbone", 70:"Aone", 71: "AsrpOneBbone", 72:"Bone", 73:"Ctwo",
  74: "CsrpTwoDbtwo", 75:"Dtwo", 76: "DsrpTwoEbtwo", 77:"Etwo", 78:"Ftwo",
  79: "FsrpTwoGbtwo", 80:"Gtwo", 81: "GsrpTwoAbtwo", 82:"Atwo", 83: "AsrpTwoBbtwo",
  84:"Btwo", 85:"Cthree", 86: "CsrpThreeDbthree", 87:"Dthree", 88: "DsrpThreeEbthree",
  89:"Ethree", 90:"Fthree"
};

var _keys = [];

var setKeys = function (noteNum) {
  _keys.push(_mapping[noteNum]);
};

var removeKey = function (noteNum) {
  var i = _keys.indexOf(_mapping[noteNum]);
  _keys.splice(i,i);
};

const KeyStore = new Store(AppDispatcher);

KeyStore.prototype.freq = function () {
  return _keys.slice()[0];
}

AppDispatcher.register(function(key) {
  var text;

  switch(key.actionType) {
    case KeyConst.KEY_PRESSED:
      setKeys(key.noteNum);
      break;

    case KeyConst.KEY_RELEASED:
      removeKey(key.noteNum);
      break;


    default:
      // no op
  }
});

module.exports = KeyStore;

