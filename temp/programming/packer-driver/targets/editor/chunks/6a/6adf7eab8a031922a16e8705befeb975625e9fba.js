System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, v3, _dec, _class, _crd, ccclass, Missile;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e3e0fahIQtIqaCEp4u7gKen", "Missile", undefined);

      ({
        ccclass
      } = _decorator);

      _export("Missile", Missile = (_dec = ccclass('Missile'), _dec(_class = class Missile extends Component {
        start() {}

        update(deltaTime) {
          let missile = this.node.position;
          let enemy = this.node.parent.getChildByName("enemy").position || this.node.parent.getChildByName("enemy1").position;
          console.log(enemy);
          let theangle = Math.atan2(missile.y - enemy.y, missile.x - enemy.x);
          let theta = theangle * 180 / Math.PI;
          this.node.eulerAngles = v3(0, 0, theta);
          let mY, mX;

          if (missile.y < enemy.y) {
            mY = missile.y + 1;
          } else if (missile.y > enemy.y) {
            mY = missile.y - 1;
          } else {
            mY = missile.y;
          }

          if (missile.x < enemy.x) {
            mX = missile.x + 1;
          } else if (missile.x > enemy.x) {
            mX = missile.x - 1;
          } else {
            mX = missile.x;
          }

          this.node.setPosition(mX, mY, 0);
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
//# sourceMappingURL=6adf7eab8a031922a16e8705befeb975625e9fba.js.map