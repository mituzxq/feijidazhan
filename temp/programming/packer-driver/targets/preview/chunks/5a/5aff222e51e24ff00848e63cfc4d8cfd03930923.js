System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Collider;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46a04qkFA1ByLoO1znaFsre", "Collider", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Collider", Collider = (_dec = ccclass('Collider'), _dec(_class = class Collider extends Component {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5aff222e51e24ff00848e63cfc4d8cfd03930923.js.map