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
        start() {}

        update(deltaTime) {
          let enemy = new (_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
            error: Error()
          }), Enemy) : Enemy)();
          let pos = enemy.pos();
          let missile = this.node.position; // let enemy = this.node.parent.getChildByName("enemy").getComponent(Enemy).node.position;

          let theangle = Math.atan2(missile.y - pos.y, missile.x - pos.x);
          let theta = theangle * 180 / Math.PI;
          this.node.eulerAngles = v3(0, 0, theta);

          if (pos.x > missile.x) {
            console.log("右");
          } else if (pos.x < missile.x) {
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
//# sourceMappingURL=5254ba57d60f04455fc776b05bb456a2cd21c819.js.map