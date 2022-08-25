System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, v2, _dec, _class, _crd, ccclass, property, missile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v2 = _cc.v2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4da84ZSpA9Nwbz8JtW4HIR1", "missile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("missile", missile = (_dec = ccclass('missile'), _dec(_class = class missile extends Component {
        start() {
          let theangle = Math.atan2(this.node.position.y - this.node.parent.getChildByName("1").position.y, this.node.position.x - this.node.parent.getChildByName("1").position.x); //弧度  

          console.log(theangle);
          let theta = theangle * 180 / Math.PI;
          console.log(theta);
          var dir = v2(Math.cos(theta), Math.sin(theta));
          console.log(dir);
          this.node.setRotation(theta, theta, theta, theta);
        }

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=02a9b9eff83f96954602da4b8dc65ac7a434a94e.js.map