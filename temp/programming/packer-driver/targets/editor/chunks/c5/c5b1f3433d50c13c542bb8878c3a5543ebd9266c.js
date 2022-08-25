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

      _cclegacy._RF.push({}, "e3e0fahIQtIqaCEp4u7gKen", "Missile", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Missile", Missile = (_dec = ccclass('Missile'), _dec(_class = class Missile extends Component {
        start() {}

        update(deltaTime) {
          let missile = this.node.position;
          let enemy = this.node.parent.getChildByName("enemy").position;
          let theangle = Math.atan2(missile.y - enemy.y, missile.x - enemy.x);
          let theta = theangle * 180 / Math.PI;
          this.node.eulerAngles = v3(0, 0, theta);

          if (enemy.x > missile.x) {
            console.log("右");
          } else if (enemy.x < missile.x) {
            console.log("左");
          } else {
            console.log("中");
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
//# sourceMappingURL=c5b1f3433d50c13c542bb8878c3a5543ebd9266c.js.map