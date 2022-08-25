System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Prefab, instantiate, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, Energy;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "880679L8X5Jd77PsJECq/Y0", "Energy", undefined);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Energy", Energy = (_dec = ccclass('Energy'), _dec2 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class Energy extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "energyrPre", _descriptor, this);

          this.energyX = -125;
        }

        start() {
          let node = new Node("box");
          node.setParent(this.node.parent);
        }

        update(deltaTime) {
          if (this.energyX > 100) {
            this.energyX = -125;
            this.node.parent.getChildByName("box").destroy();
            let node = new Node("box");
            node.setParent(this.node.parent);
          }
        }

        energy() {
          let energy = instantiate(this.energyrPre);
          energy.setParent(this.node.parent.getChildByName("box"));
          let node = this.node.position;
          energy.setPosition(this.energyX, node.y, 0);
          this.energyX += 25;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "energyrPre", [_dec2], {
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
//# sourceMappingURL=13e648a584eac3d4bdd84887b49f9f12c5220ae5.js.map