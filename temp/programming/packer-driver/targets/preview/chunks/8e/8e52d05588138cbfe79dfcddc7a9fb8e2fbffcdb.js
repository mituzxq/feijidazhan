System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, instantiate, Prefab, resources, SpriteFrame, Sprite, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, Enemy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
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
      }), _dec(_class = (_class2 = class Enemy extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "enemybullerPre", _descriptor, this);

          _initializerDefineProperty(this, "speed", _descriptor2, this);
        }

        start() {
          resources.load("assets/img/enemydie.png", SpriteFrame, (err, res) => {
            this.node.getComponent(Sprite).spriteFrame = res;
          });
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
          resources.load("img/enemydie.png", SpriteFrame, (err, res) => {
            var t = this.node.getComponent(Sprite).spriteFrame;
            t = res;
            var b = err;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemybullerPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
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
//# sourceMappingURL=8e52d05588138cbfe79dfcddc7a9fb8e2fbffcdb.js.map