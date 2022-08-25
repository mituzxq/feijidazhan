System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Missile, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MainScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMissile(extras) {
    _reporterNs.report("Missile", "./Missile", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Missile = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ce4a7VCZGBK2otMtai6GEea", "MainScene", undefined);

      ({
        ccclass,
        property
      } = cc._decorator);

      _export("default", MainScene = (_dec = property(cc.Prefab), _dec2 = property(cc.Node), ccclass(_class = (_class2 = class MainScene extends cc.Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "missilePB", _descriptor, this);

          _initializerDefineProperty(this, "targetFlag", _descriptor2, this);

          this.missileList = [];
        }

        //导弹列表
        onLoad() {
          this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        } //触摸开始，设置点击位置为目的地


        onTouchStart(e) {
          //计算触摸地点
          var localPos = this.node.convertToNodeSpaceAR(e.getLocation()); //目的地标识

          this.targetFlag.x = localPos.x;
          this.targetFlag.y = localPos.y; //生成一个导弹

          var missile = cc.instantiate(this.missilePB);
          missile.parent = this.node;
          missile.x = 0;
          missile.y = 0;
          missile.angle = 90; //保存到列表

          this.missileList.push(missile); //所有导弹设置目的地

          for (var i = 0; i < this.missileList.length; i++) {
            this.missileList[i].getComponent(_crd && Missile === void 0 ? (_reportPossibleCrUseOfMissile({
              error: Error()
            }), Missile) : Missile).setTargetPos(localPos.x, localPos.y);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "missilePB", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "targetFlag", [_dec2], {
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
//# sourceMappingURL=8ee412a16a3754f7c5aee7a28b6e112b099f9ce0.js.map