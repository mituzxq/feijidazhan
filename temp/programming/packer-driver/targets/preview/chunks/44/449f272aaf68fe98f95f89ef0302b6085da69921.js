System.register(["cc"], function (_export, _context) {
  "use strict";

  var _decorator, Component, v3, _dec, _class, _crd, ccclass, property, Missile1;

  return {
    setters: [function (_cc) {
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;
      ({
        ccclass,
        property
      } = _decorator);

      _export("Missile1", Missile1 = (_dec = ccclass('Missile1'), _dec(_class = class Missile1 extends Component {
        start() {
          var node = this.node.position;
          var nodeX = node.x;
          var nodeY = node.y;
          this.schedule(() => {
            var birY = this.node.parent.getChildByName("enemy").position.y;
            var birX = this.node.parent.getChildByName("enemy").position.x;

            if (nodeY < birY) {
              this.node.setPosition(node.x, node.y + 1);
            } else if (nodeY == birY) {
              this.node.setPosition(node.x, node.y);
            }

            if (birX < 0) {
              if (nodeX > birX) {
                this.node.setPosition(node.x - 1, node.y);
              } else {
                this.node.setPosition(node.x, node.y);
              }
            } else if (birX > 0) {
              if (nodeX < birX) {
                this.node.setPosition(node.x + 1, node.y);
              } else {
                this.node.setPosition(node.x, node.y);
              }
            } else {
              this.node.setPosition(node.x, node.y);
            }
          }, 0.01);
        }

        update(deltaTime) {
          this.rotation();
        } //旋转


        rotation() {
          var theangle = Math.atan2(this.node.position.y - this.node.parent.getChildByName("enemy").position.y, this.node.position.x - this.node.parent.getChildByName("enemy").position.x);
          var theta = theangle * 180 / Math.PI;
          this.node.eulerAngles = v3(0, 0, theta);
        }

        die() {
          this.node.destroy();
        }

      }) || _class));

      _crd = false;
    }
  };
});
//# sourceMappingURL=449f272aaf68fe98f95f89ef0302b6085da69921.js.map