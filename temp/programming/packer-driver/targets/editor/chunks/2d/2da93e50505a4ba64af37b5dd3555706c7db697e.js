System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Prefab, Energy, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameManger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEnergy(extras) {
    _reporterNs.report("Energy", "./Energy", _context.meta, extras);
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
      Energy = _unresolved_2.Energy;
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

          this.random = this.node.getChildByName("energy").getComponent(_crd && Energy === void 0 ? (_reportPossibleCrUseOfEnergy({
            error: Error()
          }), Energy) : Energy).random;
        }

        start() {
          console.log(this.random);

          switch (this.random) {
            case 0:
              this.playerbullet1();
              break;

            case 1:
              this.playerbullet2();
              break;

            case 2:
              this.playerbullet3();
              break;
          }

          this.ememy();
        }

        update(deltaTime) {} //单颗子弹


        playerbullet1() {
          this.schedule(() => {
            let buller = instantiate(this.playerbullerPre);
            buller.setParent(this.node.parent);
            let player = this.node.parent.getChildByName("hero").position;
            buller.setPosition(player.x, player.y + 50, 0);
          }, 0.5);
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
          }, 0.5);
        } //导弹


        playerbullet3() {
          this.schedule(() => {
            let buller = instantiate(this.playerbullerPre);
            buller.setParent(this.node.parent);
            let player = this.node.parent.getChildByName("hero").position;
            buller.setPosition(player.x, player.y + 50, 0);
          }, 0.5);
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
//# sourceMappingURL=2da93e50505a4ba64af37b5dd3555706c7db697e.js.map