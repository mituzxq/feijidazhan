System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, v3, _dec, _class, _class2, _descriptor, _crd, ccclass, property, EnemyBullet1;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7afd7cUup9Ew7TG6ooCgwca", "EnemyBullet1", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyBullet1", EnemyBullet1 = (_dec = ccclass('EnemyBullet1'), _dec(_class = (_class2 = class EnemyBullet1 extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "speed", _descriptor, this);
        }

        start() {
          this.theta();
        }

        update(deltaTime) {
          let bulletY = this.node.position.y;
          bulletY -= this.speed * deltaTime;
          this.node.setPosition(this.node.position.x, bulletY, 0);

          if (bulletY < -300) {
            this.die();
          }
        }

        theta() {
          this.schedule(() => {
            let bullet = this.node.position;
            let hero = this.node.parent.getChildByName("hero").position;
            let theangle = Math.atan2(bullet.y - hero.y, bullet.x - hero.x);
            let theta = theangle * 180 / Math.PI;
            console.log(theta);
            this.node.eulerAngles = v3(0, 0, theta);
            let bX, bY;

            if (bullet.y < hero.y) {
              bY = bullet.y + 1;
            } else if (bullet.y > hero.y) {
              bY = bullet.y - 1;
            } else {
              bY = bullet.y;
            }

            if (bullet.x < hero.x) {
              bX = bullet.x + 1;
            } else if (bullet.x > hero.x) {
              bX = bullet.x - 1;
            } else {
              bX = bullet.x;
            }

            this.node.setPosition(bX, bY, 0);
          }, 0.05, 200);
        }

        die() {
          this.node.destroy();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 175;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b4eaf951e677ff9f530793e572867ecc08473bc6.js.map