System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, Shield;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94384lDrptFC6h0KkFV8lHZ", "Shield", undefined);

      ({
        ccclass
      } = _decorator);

      _export("Shield", Shield = (_dec = ccclass('Shield'), _dec(_class = class Shield extends Component {
        start() {}

        update(deltaTime) {
          var pos = this.node.parent.getChildByName("hero").position;
          this.node.setPosition(pos.x, pos.y, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=58097f19a53d719baf916da77f3138293bd1bab2.js.map