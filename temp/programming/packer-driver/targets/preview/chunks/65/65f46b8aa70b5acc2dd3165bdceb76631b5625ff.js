System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Prefab, Collider, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, GameManger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCollider(extras) {
    _reporterNs.report("Collider", "./Collider", _context.meta, extras);
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
      Collider = _unresolved_2.Collider;
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
      }), _dec5 = property({
        type: Prefab
      }), _dec6 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class GameManger extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "playerbullerPre", _descriptor, this);

          _initializerDefineProperty(this, "enemyPre", _descriptor2, this);

          _initializerDefineProperty(this, "enemyPre1", _descriptor3, this);

          _initializerDefineProperty(this, "missilePre", _descriptor4, this);

          _initializerDefineProperty(this, "shieldPre", _descriptor5, this);

          this.istrue = false;
          this.isnext = 1;
        }

        start() {
          this.playerbullet1();
          this.ememy();
        }

        update(deltaTime) {}

        ememy() {
          this.schedule(() => {
            var ememyX = Math.floor(Math.random() * 320) - 165;
            var enemy;

            if (this.isnext % 10 == 0) {
              enemy = instantiate(this.enemyPre1);
            } else {
              enemy = instantiate(this.enemyPre);
            }

            enemy.setParent(this.node.parent);
            enemy.setPosition(ememyX, 350, 0);
            this.isnext++;
          }, 1);
        }

        randoms() {
          var t = Math.floor(Math.random() * 3);
          this.istrue = true;
          this.bulleris(t);
        }

        bulleris(t) {
          switch (t) {
            case 0:
              this.playerbullet2();
              break;

            case 1:
              this.playerbullet3();
              break;

            case 2:
              this.playerbullet4();
              break;
          }
        } //单颗子弹


        playerbullet1() {
          this.schedule(() => {
            if (!this.istrue) {
              var buller = instantiate(this.playerbullerPre);
              buller.setParent(this.node.parent);
              var player = this.node.parent.getChildByName("hero").position;
              buller.setPosition(player.x, player.y + 50, 0);
            }
          }, 0.5);
        } //三列子弹


        playerbullet2() {
          this.schedule(() => {
            var buller = instantiate(this.playerbullerPre);
            var buller2 = instantiate(this.playerbullerPre);
            var buller3 = instantiate(this.playerbullerPre);
            buller.setParent(this.node.parent);
            buller2.setParent(this.node.parent);
            buller3.setParent(this.node.parent);
            var player = this.node.parent.getChildByName("hero").position;
            buller.setPosition(player.x, player.y + 50, 0);
            buller2.setPosition(player.x - 20, player.y + 50, 0);
            buller3.setPosition(player.x + 20, player.y + 50, 0);
          }, 0.7, 5);
          this.schedule(() => {
            this.istrue = false;
          }, 5, 1);
        } //导弹


        playerbullet3() {
          this.schedule(() => {
            var buller = instantiate(this.missilePre);
            buller.setParent(this.node.parent);
            var player = this.node.parent.getChildByName("hero").position;
            buller.setPosition(player.x, player.y + 70, 0);
          }, 1, 3);
          this.schedule(() => {
            this.istrue = false;
          }, 5, 1);
        } //无敌


        playerbullet4() {
          var shield = instantiate(this.shieldPre);
          shield.setParent(this.node.parent);
          var player = this.node.parent.getChildByName("hero").position;
          shield.setPosition(player.x, player.y, 0);
          this.node.getComponent(_crd && Collider === void 0 ? (_reportPossibleCrUseOfCollider({
            error: Error()
          }), Collider) : Collider).change();
          this.schedule(() => {
            shield.destroy();
          }, 5, 1);
          this.istrue = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "playerbullerPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyPre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemyPre1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "missilePre", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "shieldPre", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=65f46b8aa70b5acc2dd3165bdceb76631b5625ff.js.map