System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, is1;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3265QQsYJH7aXA4s1nFbfH", "is1", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("is1", is1 = (_dec = ccclass('is1'), _dec(_class = class is1 extends Component {
        start() {
          this.node.setRotation(0, 0, 0, 45);
          console.log(this.node.rotation);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a7f73078500939c6857bfc077353d27d0cbce0fe.js.map