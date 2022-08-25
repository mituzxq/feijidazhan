System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Contact2DType, director, PhysicsSystem2D, Label, Enemy, EnemyBullet, Energy, PlayerBullet, _dec, _class, _crd, ccclass, Collider;

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "./Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyBullet(extras) {
    _reporterNs.report("EnemyBullet", "./EnemyBullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnergy(extras) {
    _reporterNs.report("Energy", "./Energy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerBullet(extras) {
    _reporterNs.report("PlayerBullet", "./PlayerBullet", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      director = _cc.director;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      Enemy = _unresolved_2.Enemy;
    }, function (_unresolved_3) {
      EnemyBullet = _unresolved_3.EnemyBullet;
    }, function (_unresolved_4) {
      Energy = _unresolved_4.Energy;
    }, function (_unresolved_5) {
      PlayerBullet = _unresolved_5.PlayerBullet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46a04qkFA1ByLoO1znaFsre", "Collider", undefined);

      ({
        ccclass
      } = _decorator);

      _export("Collider", Collider = (_dec = ccclass('Collider'), _dec(_class = class Collider extends Component {
        constructor(...args) {
          super(...args);
          this.dieNumber = 0;
        }

        start() {
          PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        update(deltaTime) {}

        onBeginContact(selfCollider, otherCollider, contact) {
          if (selfCollider.tag == 1 && otherCollider.tag == 2 || selfCollider.tag == 2 && otherCollider.tag == 1) {
            if (selfCollider.tag == 1) {
              selfCollider.getComponent(_crd && PlayerBullet === void 0 ? (_reportPossibleCrUseOfPlayerBullet({
                error: Error()
              }), PlayerBullet) : PlayerBullet).die();
              otherCollider.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
                error: Error()
              }), Enemy) : Enemy).die();
            }

            if (selfCollider.tag == 2) {
              selfCollider.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
                error: Error()
              }), Enemy) : Enemy).die();
              otherCollider.getComponent(_crd && PlayerBullet === void 0 ? (_reportPossibleCrUseOfPlayerBullet({
                error: Error()
              }), PlayerBullet) : PlayerBullet).die();
            }

            this.setScore();
          }

          if (selfCollider.tag == 2 && otherCollider.tag == 3 || selfCollider.tag == 3 && otherCollider.tag == 2) {
            if (otherCollider.tag == 3) {
              selfCollider.getComponent(_crd && EnemyBullet === void 0 ? (_reportPossibleCrUseOfEnemyBullet({
                error: Error()
              }), EnemyBullet) : EnemyBullet).die();
            }

            if (selfCollider.tag == 3) {
              selfCollider.getComponent(_crd && EnemyBullet === void 0 ? (_reportPossibleCrUseOfEnemyBullet({
                error: Error()
              }), EnemyBullet) : EnemyBullet).die();
            }
          }

          if (selfCollider.tag == 0 && otherCollider.tag == 2 || selfCollider.tag == 2 && otherCollider.tag == 0 || selfCollider.tag == 0 && otherCollider.tag == 3 || selfCollider.tag == 3 && otherCollider.tag == 0) {
            alert("你以死亡，分数：" + this.dieNumber);
            director.purgeDirector();
          }
        }

        setScore() {
          this.node.children[0].getComponent(Label).string = "score:" + ++this.dieNumber;
          this.node.children[1].getComponent(_crd && Energy === void 0 ? (_reportPossibleCrUseOfEnergy({
            error: Error()
          }), Energy) : Energy).energy();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=15c89caabb129dcadf99d8a52e20546b0f683602.js.map