System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, missile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
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
          var theangle = Math.atan2(this.node.position.y - this.node.parent.getChildByName("1").position.y, this.node.position.x - this.node.parent.getChildByName("1").position.x); //弧度  

          console.log(theangle);
          var theta = theangle * 180 / Math.PI;
          console.log(theta);
          setTimeout(() => {
            var node = this.node.position;
            this.node.setPosition(node.x, node.y - 20, 0);
          }, 1);
        }

        update(deltaTime) {}

        run() {
          var node = this.node.position;
          this.node.setPosition(node.x, node.y - 20, 0);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a1f242a4672e5b6017acb613e8e541ef392b6ef.js.map