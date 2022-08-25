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
          var pos = this.node.parent.getChildByName("player").position;
          console.log(pos);
          this.node.setPosition(pos.x, pos.y, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a01b0208f204af745269324a8228cd90e28675e4.js.map