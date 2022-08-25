System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Contact2DType, instantiate, PhysicsSystem2D, Prefab, director, PlayerBullet, Enemy, EnemyAll, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameManger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayerBullet(extras) {
    _reporterNs.report("PlayerBullet", "./PlayerBullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemy(extras) {
    _reporterNs.report("Enemy", "./Enemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnemyAll(extras) {
    _reporterNs.report("EnemyAll", "./EnemyAll", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      instantiate = _cc.instantiate;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Prefab = _cc.Prefab;
      director = _cc.director;
    }, function (_unresolved_2) {
      PlayerBullet = _unresolved_2.PlayerBullet;
    }, function (_unresolved_3) {
      Enemy = _unresolved_3.Enemy;
    }, function (_unresolved_4) {
      EnemyAll = _unresolved_4.EnemyAll;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8965qFnH1MPqO0RyxNe8Ay", "GameManger", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManger", GameManger = (_dec = ccclass('GameManger'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class GameManger extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "playerbullerPre", _descriptor, this);

          _initializerDefineProperty(this, "enemybullerPre", _descriptor2, this);

          _initializerDefineProperty(this, "enemyPre", _descriptor3, this);

          this.dieNumber = 0;
        }

        start() {
          this.playerbullet();
          this.ememybullet();
          this.ememy();
          PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        update(deltaTime) {}

        playerbullet() {
          this.schedule(() => {
            let buller = instantiate(this.playerbullerPre);
            buller.setParent(this.node.parent);
            let player = this.node.parent.getChildByName("hero").position;
            buller.setPosition(player.x, player.y + 50, 0);
          }, 0.5);
        }

        ememybullet() {
          this.schedule(() => {
            let buller = instantiate(this.playerbullerPre);
            buller.setParent(this.node.parent.getChildByName("EnemyAll"));
            let Enemyall = new (_crd && EnemyAll === void 0 ? (_reportPossibleCrUseOfEnemyAll({
              error: Error()
            }), EnemyAll) : EnemyAll)();
            let enemy = Enemyall.node.getChildByName("enemy").position;
            buller.setPosition(enemy.x, enemy.y - 50, 0);
          }, 0.5);
        }

        ememy() {
          this.schedule(() => {
            let ememyX = Math.floor(Math.random() * 330) - 165;
            let enemy = instantiate(this.enemyPre);
            enemy.setParent(this.node.parent.getChildByName("EnemyAll"));
            console.log(enemy.name);
            enemy.setPosition(ememyX, 550, 0);
          }, 1);
        }

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
            } // this.score();

          }

          if (selfCollider.tag == 0 && otherCollider.tag == 2 || selfCollider.tag == 2 && otherCollider.tag == 0) {
            alert("你以死亡，分数：" + this.dieNumber);
            director.purgeDirector();
          }
        } // score() {
        //     let t = this.dieNumber++;
        //     this.printScore();
        // }
        // printScore() {
        //     let score = this.node.children[1];
        //     score.getComponent(Label).string = this.dieNumber + "";
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerbullerPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemybullerPre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemyPre", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4c73f4cd36ad056f41233c83d33d29b5d2a21a4a.js.map