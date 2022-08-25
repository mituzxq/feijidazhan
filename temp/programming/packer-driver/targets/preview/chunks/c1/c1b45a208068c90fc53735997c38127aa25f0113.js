System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, v3, Enemy, _dec, _class, _crd, ccclass, property, Missile;

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "./Enemy", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      Enemy = _unresolved_2.Enemy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3e0fahIQtIqaCEp4u7gKen", "Missile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Missile", Missile = (_dec = ccclass('Missile'), _dec(_class = class Missile extends Component {
        start() {
          this.schedule(() => {
            var node = this.node.position;
            var nodeX = node.x;
            var nodeY = node.y;
            var birY = this.node.parent.getChildByName("enemy").getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
              error: Error()
            }), Enemy) : Enemy).node.position.x;
            var birX = this.node.parent.getChildByName("enemy").getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
              error: Error()
            }), Enemy) : Enemy).node.position.y;

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

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c1b45a208068c90fc53735997c38127aa25f0113.js.map