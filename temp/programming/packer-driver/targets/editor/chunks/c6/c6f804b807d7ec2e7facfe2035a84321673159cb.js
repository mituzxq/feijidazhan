System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Contact2DType, instantiate, PhysicsSystem2D, Prefab, director, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameManger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      instantiate = _cc.instantiate;
      PhysicsSystem2D = _cc.PhysicsSystem2D;
      Prefab = _cc.Prefab;
      director = _cc.director;
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
      }), _dec(_class = (_class2 = class GameManger extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "playerbullerPre", _descriptor, this);

          _initializerDefineProperty(this, "enemyPre", _descriptor2, this);

          this.dieNumber = 0;
        }

        start() {
          this.playerbullet();
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
          }, 1);
        }

        ememy() {
          this.schedule(() => {
            let ememyX = Math.floor(Math.random() * 330) - 165;
            let enemy = instantiate(this.enemyPre);
            enemy.setParent(this.node.parent);
            enemy.setPosition(ememyX, 550, 0);
            let enemypos = enemy.position;
          }, 1);
        }

        onBeginContact(selfCollider, otherCollider, contact) {
          if (selfCollider.tag == 1 && otherCollider.tag == 2 || selfCollider.tag == 2 && otherCollider.tag == 1) {
            // if (selfCollider.tag == 1) {
            //     selfCollider.getComponent(PlayerBullet).die();
            //     otherCollider.getComponent(Enemy).die();
            // }
            // if (selfCollider.tag == 2) {
            //     selfCollider.getComponent(Enemy).die();
            //     otherCollider.getComponent(PlayerBullet).die();
            // }
            this.node.parent.getChildByName("enemy").destroy();
            this.node.parent.getChildByName("playerbullet").destroy(); // this.score();
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyPre", [_dec3], {
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
//# sourceMappingURL=c6f804b807d7ec2e7facfe2035a84321673159cb.js.map