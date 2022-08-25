System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, instantiate, Prefab, Player, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, GameManger;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPlayer(extras) {
    _reporterNs.report("Player", "./Player", _context.meta, extras);
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
      Player = _unresolved_2.Player;
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
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bullerPre", _descriptor, this);

          _initializerDefineProperty(this, "enemyPre", _descriptor2, this);

          this.dieNumber = 0;
          this.play = new (_crd && Player === void 0 ? (_reportPossibleCrUseOfPlayer({
            error: Error()
          }), Player) : Player)();
        }

        start() {
          this.Bullets();
          console.log(this.node.parent.name); // this.schedule(() => {
          //     let ememyX = Math.floor(Math.random() * 160) - 80;
          //     let enemy = instantiate(this.enemyPre);
          //     enemy.setParent(this.node.parent);
          //     enemy.setPosition(ememyX, 150, 0);
          // }, 1)
          // PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }

        update(deltaTime) {}

        Bullets() {
          this.schedule(() => {
            var buller = instantiate(this.bullerPre);
            buller.setParent(this.node.parent.getChildByName("hero"));
            var player = this.node.parent.position;
            buller.setPosition(player.x, player.y + 40, 0);
          }, 0.5);
        } // onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        //     if ((selfCollider.tag == 0 && otherCollider.tag == 1) || (selfCollider.tag == 1 && otherCollider.tag == 0)) {
        //         if (selfCollider.tag == 0) {
        //             selfCollider.getComponent(Bullet).die();
        //             otherCollider.getComponent(enemyManger).die();
        //         }
        //         if (selfCollider.tag == 1) {
        //             selfCollider.getComponent(enemyManger).die();
        //             otherCollider.getComponent(Bullet).die();
        //         }
        //         this.score();
        //     }
        //     if ((selfCollider.tag == 1 && otherCollider.tag == 3) || (selfCollider.tag == 3 && otherCollider.tag == 1)) {
        //         alert("你以死亡，分数：" + this.dieNumber);
        //         director.purgeDirector();
        //         director.loadScene("begin");
        //     }
        // }
        // score() {
        //     let t = this.dieNumber++;
        //     this.printScore();
        // }
        // printScore() {
        //     let score = this.node.children[1];
        //     score.getComponent(Label).string = this.dieNumber + "";
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bullerPre", [_dec2], {
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
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3bf42cad78048eebbafbf8756e038e914f81479.js.map