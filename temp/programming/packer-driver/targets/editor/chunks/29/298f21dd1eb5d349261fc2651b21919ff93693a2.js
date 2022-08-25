System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, Shield;

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
        ccclass,
        property
      } = _decorator);

      _export("Shield", Shield = (_dec = ccclass('Shield'), _dec(_class = class Shield extends Component {
        start() {}

        update(deltaTime) {
          let pos = this.node.parent.getChildByName("hero").position;
          this.node.setPosition(pos.x, pos.y, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=298f21dd1eb5d349261fc2651b21919ff93693a2.js.map