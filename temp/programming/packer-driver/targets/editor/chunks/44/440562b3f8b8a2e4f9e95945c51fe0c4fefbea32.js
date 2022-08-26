System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Enemydie;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "35efbuk86VBAIkXzp4ni3cW", "Enemydie", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemydie", Enemydie = (_dec = ccclass('Enemydie'), _dec(_class = class Enemydie extends Component {
        start() {}

        update(deltaTime) {}

        die() {
          this.scheduleOnce(function () {
            this.node.destroy();
          }, 0.3);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=440562b3f8b8a2e4f9e95945c51fe0c4fefbea32.js.map