System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Contact2DType, PhysicsSystem2D, Label, director, BoxCollider2D, Enemy, Enemy1, EnemyBullet, GameManger, Missile, PlayerBullet, _dec, _class, _crd, ccclass, Collider;

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "./Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy2(extras) {
    _reporterNs.report("Enemy1", "./Enemy1", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyBullet(extras) {
    _reporterNs.report("EnemyBullet", "./EnemyBullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameManger(extras) {
    _reporterNs.report("GameManger", "./GameManger", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMissile(extras) {
    _reporterNs.report("Missile", "./Missile", _context.meta, extras);
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
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Label = _cc.Label;
      director = _cc.director;
      BoxCollider2D = _cc.BoxCollider2D;
    }, function (_unresolved_2) {
      Enemy = _unresolved_2.Enemy;
    }, function (_unresolved_3) {
      Enemy1 = _unresolved_3.Enemy1;
    }, function (_unresolved_4) {
      EnemyBullet = _unresolved_4.EnemyBullet;
    }, function (_unresolved_5) {
      GameManger = _unresolved_5.GameManger;
    }, function (_unresolved_6) {
      Missile = _unresolved_6.Missile;
    }, function (_unresolved_7) {
      PlayerBullet = _unresolved_7.PlayerBullet;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "46a04qkFA1ByLoO1znaFsre", "Collider", undefined);

      ({
        ccclass
      } = _decorator);

      _export("Collider", Collider = (_dec = ccclass('Collider'), _dec(_class = class Collider extends Component {
        constructor() {
          super(...arguments);
          this.dieNumber = 1;
        }

        start() {
          PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        update(deltaTime) {}

        onBeginContact(selfCollider, otherCollider, contact) {
          // 0:玩家,1:玩家子弹,2:敌人,3:敌人子弹,4:导弹,5:护盾,6:敌人1,7:敌人子弹1
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

          if (selfCollider.tag == 1 && otherCollider.tag == 6 || selfCollider.tag == 6 && otherCollider.tag == 1) {
            if (selfCollider.tag == 1) {
              selfCollider.getComponent(_crd && PlayerBullet === void 0 ? (_reportPossibleCrUseOfPlayerBullet({
                error: Error()
              }), PlayerBullet) : PlayerBullet).die();
              otherCollider.getComponent(_crd && Enemy1 === void 0 ? (_reportPossibleCrUseOfEnemy2({
                error: Error()
              }), Enemy1) : Enemy1).die();
            }

            if (selfCollider.tag == 6) {
              selfCollider.getComponent(_crd && Enemy1 === void 0 ? (_reportPossibleCrUseOfEnemy2({
                error: Error()
              }), Enemy1) : Enemy1).die();
              otherCollider.getComponent(_crd && PlayerBullet === void 0 ? (_reportPossibleCrUseOfPlayerBullet({
                error: Error()
              }), PlayerBullet) : PlayerBullet).die();
            }

            this.setScore();
            this.node.getComponent(_crd && GameManger === void 0 ? (_reportPossibleCrUseOfGameManger({
              error: Error()
            }), GameManger) : GameManger).randoms();
          }

          if (selfCollider.tag == 4 && otherCollider.tag == 2 || selfCollider.tag == 2 && otherCollider.tag == 4) {
            if (selfCollider.tag == 4) {
              selfCollider.getComponent(_crd && Missile === void 0 ? (_reportPossibleCrUseOfMissile({
                error: Error()
              }), Missile) : Missile).die();
              otherCollider.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
                error: Error()
              }), Enemy) : Enemy).die();
            }

            if (selfCollider.tag == 2) {
              selfCollider.getComponent(_crd && Enemy === void 0 ? (_reportPossibleCrUseOfEnemy({
                error: Error()
              }), Enemy) : Enemy).die();
              otherCollider.getComponent(_crd && Missile === void 0 ? (_reportPossibleCrUseOfMissile({
                error: Error()
              }), Missile) : Missile).die();
            }

            this.setScore();
          }

          if (selfCollider.tag == 2 && otherCollider.tag == 3 || selfCollider.tag == 3 && otherCollider.tag == 2) {
            if (otherCollider.tag == 3) {
              otherCollider.getComponent(_crd && EnemyBullet === void 0 ? (_reportPossibleCrUseOfEnemyBullet({
                error: Error()
              }), EnemyBullet) : EnemyBullet).die();
            }

            if (selfCollider.tag == 3) {
              selfCollider.getComponent(_crd && EnemyBullet === void 0 ? (_reportPossibleCrUseOfEnemyBullet({
                error: Error()
              }), EnemyBullet) : EnemyBullet).die();
            }
          }

          if (selfCollider.tag == 5 && otherCollider.tag == 3 || selfCollider.tag == 3 && otherCollider.tag == 5) {
            if (selfCollider.tag == 3) {
              selfCollider.getComponent(_crd && EnemyBullet === void 0 ? (_reportPossibleCrUseOfEnemyBullet({
                error: Error()
              }), EnemyBullet) : EnemyBullet).die();
            }

            if (otherCollider.tag == 3) {
              otherCollider.getComponent(_crd && EnemyBullet === void 0 ? (_reportPossibleCrUseOfEnemyBullet({
                error: Error()
              }), EnemyBullet) : EnemyBullet).die();
            }
          }

          if (selfCollider.tag == 0 && otherCollider.tag == 2 || selfCollider.tag == 2 && otherCollider.tag == 0 || selfCollider.tag == 0 && otherCollider.tag == 3 || selfCollider.tag == 3 && otherCollider.tag == 0 || selfCollider.tag == 0 && otherCollider.tag == 7 || selfCollider.tag == 7 && otherCollider.tag == 0) {
            alert("你以死亡，分数：" + this.dieNumber);
            director.purgeDirector();
            director.loadScene("Begin");
          }
        }

        setScore() {
          this.node.children[0].getComponent(Label).string = "score:" + this.dieNumber++;
        }

        change() {
          this.node.parent.getChildByName("hero").getComponent(BoxCollider2D).tag = 1234;
          this.schedule(() => {
            this.node.parent.getChildByName("hero").getComponent(BoxCollider2D).tag = 0;
          }, 5, 1);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ae98937337ce0a3a6964918cb0b89ba24c5914d9.js.map