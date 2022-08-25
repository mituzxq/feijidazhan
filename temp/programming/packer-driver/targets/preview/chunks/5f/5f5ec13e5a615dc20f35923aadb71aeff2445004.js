System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, v3, _dec, _class, _crd, ccclass, property, Missile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
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
          this.moveLimit = 20;
        }

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

          if (Math.sqrt(Math.pow(this.node.x - this.targetPos.x, 2) + Math.pow(this.node.y - this.targetPos.y, 2)) > this.moveLimit) {
            //导弹和目标点之间弧度、角度 
            var targetRadian = Math.atan2(this.targetPos.y - this.node.y, this.targetPos.x - this.node.x);
            var targetAngle = targetRadian * 180 / Math.PI; //导弹当前角度

            var curAngle = this.node.angle; //导弹当前角度和导弹最终指向角度的差

            var distAngle = targetAngle - curAngle; //导弹转动的角速度，根据角度差来判断顺时针或逆时针。( stepAngle=null时才会计算旋转角度，为了防止导弹出现在边界值附近左右摇摆的问题，一旦确定旋转角度方向，则不再改变)

            if (this.stepAngle == null) {
              this.stepAngle = distAngle > 0 ? this.angleSpeed : -this.angleSpeed;
            } //临界值判断 (Math.atan2会在边界值位置直接从180变成-180，或-180变成180，导致永远到不了目标角度)


            if (Math.abs((curAngle + 360) % 360 - (targetAngle + 360) % 360) > Math.abs(this.stepAngle) + 1) {
              //角度未达到临近值才会++，防止抖动
              if (Math.abs(this.node.angle - targetAngle) > Math.abs(this.stepAngle) + 1) {
                this.node.angle += this.stepAngle;
              }
            } //移动


            var nextRadian = this.node.angle * Math.PI / 180;
            this.node.x += Math.cos(nextRadian) * this.moveSpeed;
            this.node.y += Math.sin(nextRadian) * this.moveSpeed;
          }
        } //旋转


        rotation() {
          if (Math.sqrt(Math.pow(this.node.position.x - this.node.parent.getChildByName("enemy").position.x, 2) + Math.pow(this.node.position.y - this.node.parent.getChildByName("enemy").position.y, 2)) > this.moveLimit) {
            var theangle = Math.atan2(this.node.position.y - this.node.parent.getChildByName("enemy").position.y, this.node.position.x - this.node.parent.getChildByName("enemy").position.x);
            var theta = theangle * 180 / Math.PI;
            this.node.eulerAngles = v3(0, 0, theta);
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
//# sourceMappingURL=5f5ec13e5a615dc20f35923aadb71aeff2445004.js.map