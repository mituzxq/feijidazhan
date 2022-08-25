System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec2, _dec, _class, _crd, ccclass, property, daodan;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec2 = _cc.Vec2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3ac4412LqVLcoYclOr8TgV3", "daodan", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("daodan", daodan = (_dec = ccclass('daodan'), _dec(_class = class daodan extends Component {
        constructor() {
          super(...arguments);
          this.targetPos = new Vec2();
          this.angleSpeed = 5;
          this.moveSpeed = 5;
          this.moveLimit = 20;
          this.stepAngle = null;
        }

        /**
         * 设置目标点
         * @param xPos x坐标
         * @param yPos y坐标
         */
        setTargetPos(xPos, yPos) {
          this.targetPos.x = xPos;
          this.targetPos.y = yPos;
          this.stepAngle = null;
        }
        /**重置 */


        reset() {
          this.stepAngle = null;
        }

        update() {
          //距离目的地一定距离才会移动，防止抖动
          if (Math.sqrt(Math.pow(this.node.position.x - this.targetPos.x, 2) + Math.pow(this.node.position.y - this.targetPos.y, 2)) > this.moveLimit) {
            //导弹和目标点之间弧度、角度 
            var targetRadian = Math.atan2(this.targetPos.y - this.node.position.y, this.targetPos.x - this.node.position.x);
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
            var nodeX = this.node.position.x;
            var nodeY = this.node.position.x;
            nodeX += Math.cos(nextRadian) * this.moveSpeed;
            nodeY += Math.sin(nextRadian) * this.moveSpeed;
            this.node.setPosition(nodeX, nodeY);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=943be72f13ef008eb7d1898033354edf800c44ea.js.map