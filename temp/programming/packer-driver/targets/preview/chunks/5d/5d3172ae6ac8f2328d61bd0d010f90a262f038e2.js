System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Prefab, Enemydie, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEnemydie(extras) {
    _reporterNs.report("Enemydie", "./Enemydie", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      Enemydie = _unresolved_2.Enemydie;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65ec9kSeTtHxL7cinn5PnTf", "Enemy", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class Enemy extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "enemybullerPre", _descriptor, this);

          _initializerDefineProperty(this, "enemydiePre", _descriptor2, this);

          _initializerDefineProperty(this, "speed", _descriptor3, this);
        }

        start() {
          this.enemybullet();
        }

        update(deltaTime) {
          var bulletY = this.node.position.y;
          bulletY -= this.speed * deltaTime;
          this.node.setPosition(this.node.position.x, bulletY, 0);

          if (bulletY < -300) {
            this.die();
          }
        } //给敌机生成子弹


        enemybullet() {
          this.schedule(() => {
            var buller = instantiate(this.enemybullerPre);
            buller.setParent(this.node.parent);
            var position = this.node.position;
            buller.setPosition(position.x, position.y - 30, 0);
          }, 0.5);
        }

        die() {
          // resources.load("img/enemydie.png", SpriteFrame, (err, res) => {
          //     if (err) {
          //         console.log(err);
          //     }
          //     this.node.getComponent(Sprite).spriteFrame = res;
          // })
          var die = instantiate(this.enemydiePre);
          die.setParent(this.node.parent);
          die.setPosition(this.node.position);
          this.schedule(() => {
            this.node.parent.getChildByName("enemydie").getComponent(_crd && Enemydie === void 0 ? (_reportPossibleCrUseOfEnemydie({
              error: Error()
            }), Enemydie) : Enemydie).die();
          }, 0.5, 1);
          this.node.destroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemybullerPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemydiePre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5d3172ae6ac8f2328d61bd0d010f90a262f038e2.js.map