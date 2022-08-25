System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, v3, _dec, _class, _crd, ccclass, property, missile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
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
          let birY = this.node.parent.getChildByName("1").position;
          console.log(birY);
          this.schedule(() => {
            let node = this.node.position;
            let nodeX = node.x;
            let nodeY = node.y;
            let birY = this.node.parent.getChildByName("1").position.y;
            let birX = this.node.parent.getChildByName("1").position.x;

            if (nodeX > birX && nodeY > birY) {
              this.node.setPosition(node.x - 1, node.y - 1);
            } else if (nodeX > birX && nodeY <= birY) {
              this.node.setPosition(node.x - 1, node.y);
            } else if (nodeX == birX && nodeY > birY) {
              this.node.setPosition(node.x, node.y - 1);
            } else {
              this.node.setPosition(node.x, node.y);
            }

            console.log(this.node.rotation);
            console.log(this.node.position);
          }, 0.01);
        }

        update(deltaTime) {
          this.rotation();
        } //旋转


        rotation() {
          let theangle = Math.atan2(this.node.position.y - this.node.parent.getChildByName("1").position.y, this.node.position.x - this.node.parent.getChildByName("1").position.x);
          let theta = theangle * 180 / Math.PI;
          this.node.eulerAngles = v3(0, 0, theta);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=527866dddfbc44d1020651772dcbac79201dfc50.js.map