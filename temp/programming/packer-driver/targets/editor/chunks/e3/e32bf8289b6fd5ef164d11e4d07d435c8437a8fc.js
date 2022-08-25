System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, instantiate, Prefab, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameManger;

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

          this.randomss = null;
          this.istrue = true;
        }

        start() {
          if (this.istrue) {
            this.playerbullet1();
          } // this.playerbullet2();


          this.ememy();
        }

        update(deltaTime) {}

        randoms() {
          this.randomss = Math.floor(Math.random() * 2);
          this.istrue = false;
          this.bulleris();
        }

        bulleris() {
          switch (this.randomss) {
            case 0:
              this.playerbullet2();
              this.istrue = true;
              break;

            case 1:
              this.playerbullet3();
              this.istrue = true;
              break;
          }
        } //单颗子弹


        playerbullet1() {
          // if (this.istrue) {
          this.schedule(() => {
            let buller = instantiate(this.playerbullerPre);
            buller.setParent(this.node.parent);
            let player = this.node.parent.getChildByName("hero").position;
            buller.setPosition(player.x, player.y + 50, 0);
          }, 0.5); // }
        } //三列子弹


        playerbullet2() {
          this.schedule(() => {
            let buller = instantiate(this.playerbullerPre);
            let buller2 = instantiate(this.playerbullerPre);
            let buller3 = instantiate(this.playerbullerPre);
            buller.setParent(this.node.parent);
            buller2.setParent(this.node.parent);
            buller3.setParent(this.node.parent);
            let player = this.node.parent.getChildByName("hero").position;
            buller.setPosition(player.x, player.y + 50, 0);
            buller2.setPosition(player.x - 20, player.y + 50, 0);
            buller3.setPosition(player.x + 20, player.y + 50, 0);
          }, 0.5, 10);
        } //导弹


        playerbullet3() {
          this.schedule(() => {
            let buller = instantiate(this.playerbullerPre);
            let buller2 = instantiate(this.playerbullerPre);
            buller.setParent(this.node.parent);
            buller2.setParent(this.node.parent);
            let player = this.node.parent.getChildByName("hero").position;
            buller.setPosition(player.x, player.y + 50, 0);
            buller2.setPosition(player.x - 20, player.y, 0);
          }, 0.5, 10);
        }

        ememy() {
          this.schedule(() => {
            let ememyX = Math.floor(Math.random() * 320) - 165;
            let enemy = instantiate(this.enemyPre);
            enemy.setParent(this.node.parent);
            enemy.setPosition(ememyX, 350, 0);
          }, 1);
        }

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
//# sourceMappingURL=e32bf8289b6fd5ef164d11e4d07d435c8437a8fc.js.map