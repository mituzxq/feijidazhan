System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, v3, Vec2, _dec, _class, _crd, ccclass, property, Missile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6d98dHLoABGg6XrcJMVmM5f", "Missile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Missile", Missile = (_dec = ccclass('Missile'), _dec(_class = class Missile extends Component {
        constructor() {
          super(...arguments);
          this.targetPos = new Vec2();
          this.angleSpeed = 5;
          this.moveSpeed = 5;
          this.moveLimit = 20;
          this.stepAngle = null;
        }

        setTargetPos(xPos, yPos) {
          this.targetPos.x = xPos;
          this.targetPos.y = yPos;
          this.stepAngle = null;
        }
        /**重置 */


        reset() {
          this.stepAngle = null;
        }

        start() {}

        update(deltaTime) {
          this.rotation();
        } //旋转


        rotation() {
          if (Math.sqrt(Math.pow(this.node.position.x - this.node.parent.getChildByName("enemy").position.x, 2) + Math.pow(this.node.position.y - this.node.parent.getChildByName("enemy").position.y, 2)) > this.moveLimit) {
            var theangle = Math.atan2(this.node.position.y - this.node.parent.getChildByName("enemy").position.y, this.node.position.x - this.node.parent.getChildByName("enemy").position.x);
            var theta = theangle * 180 / Math.PI;
            var curAngle = this.node.angle;
            var distAngle = theta - curAngle;
            this.node.eulerAngles = v3(0, 0, theta);

            if (this.stepAngle == null) {
              this.stepAngle = distAngle > 0 ? this.angleSpeed : -this.angleSpeed;
            }

            if (Math.abs((curAngle + 360) % 360 - (theta + 360) % 360) > Math.abs(this.stepAngle) + 1) {
              //角度未达到临近值才会++，防止抖动
              if (Math.abs(this.node.angle - theta) > Math.abs(this.stepAngle) + 1) {
                this.node.angle += this.stepAngle;
              }
            }

            var nextRadian = this.node.angle * Math.PI / 180;
            var nodeX = this.node.position.x;
            var nodeY = this.node.position.y;
            nodeX += Math.cos(nextRadian) * this.moveSpeed;
            nodeY += Math.sin(nextRadian) * this.moveSpeed;
            this.node.setPosition(nodeX, nodeY);
          }
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
//# sourceMappingURL=32df5e452fce8490e1eed7164d77c0f89ae36799.js.map